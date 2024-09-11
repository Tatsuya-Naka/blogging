import { z } from 'zod';
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import AWS from 'aws-sdk';
import { env } from "~/env";
import { prisma } from '~/lib/prisma';

// Configure AWS SDK
const s3 = new AWS.S3({
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWC_SECRET_ACCESS_KEY,
    region: env.AWS_REGION,
});

export const imageRouter = createTRPCRouter({
    uploadImage: protectedProcedure
        .input(
            z.object({
                file: z.any(), // You may need a more specific file schema
                folder: z.string(),
            })
        )
        // .mutation(async ({ ctx, input }) => {
        //     const { file, folder } = input;
        //     const params = {
        //         Bucket: env.S3_BUCKET_NAME!,
        //         Key: `${folder}/${file}`,
        //         // Body: file,
        //         Expires: 60, // URL expires in 60 seconds
        //         // ContentType: file.type,
        //         ContentType: 'image/jpeg',
        //         ACL: 'public-read',
        //       };
            
        //     return s3.getSignedUrlPromise('putObject', params);
        // }),
        .mutation(async({ctx, input}) => {
            const {file, folder} = input;
            // const image = await ctx.db.topic.create({
            //     data: {
            //         userId: ctx.session.user.id,
            //     }
            // });
            const params = {
                Fields: {
                    Key: `${folder}/${file}`,
                    // Key: `${folder}/${image.id}`,
                },
                Conditions: [
                    ["start-with-", "$Content-Type", "image/"],
                    ["content-length-range", 0, 1000000],
                ],
                Expires: 30,
                Bucket: env.S3_BUCKET_NAME
            };
            return s3.createPresignedPost(params);
        }) 
});
