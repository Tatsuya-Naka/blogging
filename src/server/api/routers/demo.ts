import { z } from 'zod';
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import AWS from 'aws-sdk';
import { env } from "~/env";
import { prisma } from '~/lib/prisma';
import { Post } from '@prisma/client';

// Configure AWS SDK
const s3 = new AWS.S3({
    credentials: {
        secretAccessKey: env.AWC_SECRET_ACCESS_KEY,
        accessKeyId: env.AWS_ACCESS_KEY_ID,
    },
    region: env.AWS_REGION,
});
// const s3 = new AWS.S3();

interface ImageMetaData extends Post {
    url: string,
};

export const demoRouter = createTRPCRouter({
    getImage: protectedProcedure
        .query(async ({ ctx }) => {
            const userId = ctx.session.user.id;

            const images = await ctx.db.post.findMany({
                where: {
                    userId: userId,
                }
            });

            const extendedImage: ImageMetaData[] = await Promise.all(images.map((async (image) => {
                return {
                    ...image,
                    url: await s3.getSignedUrlPromise('getObject', {
                        Bucket: env.S3_BUCKET_NAME,
                        Key: `${userId}/${image.id}`,
                    })
                }
            })));

            return extendedImage;
        }),

    uploadImage: protectedProcedure
        .input(z.object({ type: z.string() }))
        .mutation(async ({ ctx, input }) => {
            // const userId = ctx.session.user.id;

            // const image = await ctx.db.post.create({
            //     data: {
            //         userId: userId,
            //     }
            // });


            // const params = {
            //     Bucket: env.S3_BUCKET_NAME,
            //     Fields: {
            //         Key: `${userId}/${image.id}`,
            //     },
            //     Conditions: [
            //         ["start-with-", "$Content-Type", "image/"],
            //         ["content-length-range", 0, 10000000],
            //     ],
            //     Expires: 60,
            // };
            // return s3.createPresignedPost(params);
            // return new Promise((resolve, reject) => {
            //     s3.createPresignedPost({
            //         Bucket: env.S3_BUCKET_NAME,
            //         Fields: {
            //             Key: `${userId}/${image.id}`,
            //         },
            //         Conditions: [
            //             ["start-with-", "$Content-Type", "image/"],
            //             ["content-length-range", 0, 10000000],
            //         ],
            //         Expires: 60,
            //     }, (err, signed) => {
            //         if (err) return reject(err);
            //         resolve(signed);
            //     });
            // })
            const userId = ctx.session.user.id;
            const image = await ctx.db.post.create({
                data: {
                    userId: userId,
                }
            });

            const params = {
                Bucket: env.S3_BUCKET_NAME,
                Key: `${userId}/${image.id}`,
                Expires: 60, // The URL will expire in 60 seconds
                ContentType: `${input.type}`, // Adjust this based on your file type
                ACL: 'public-read' // Optional: Set permissions
            };

            const url = await s3.getSignedUrlPromise('putObject', params);
            return { url };
        })
});
