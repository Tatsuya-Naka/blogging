import { z } from 'zod';
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import { env } from "~/env";
import { Post } from '@prisma/client';
import { S3Client, GetObjectCommand, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const client = new S3Client({
    region: env.AWS_REGION,
    credentials: {
        secretAccessKey: env.AWC_SECRET_ACCESS_KEY,
        accessKeyId: env.AWS_ACCESS_KEY_ID,
    },
});

interface ImageMetaData extends Post {
    url: string,
};

export const demoRouter = createTRPCRouter({
    getPresignedURLForDelete: protectedProcedure
        .input(z.object({
            bgimageId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            const params = new DeleteObjectCommand({
                Bucket: env.S3_BUCKET_NAME,
                Key: `${ctx.session.user.id}/${input.bgimageId}`,
            });

            const url = await getSignedUrl(client, params, { expiresIn: 3600 });

            return url;
        }),

    getPresignedURLForShow: protectedProcedure
        .input(z.object({
            bgimageId: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            // const params = new GetObjectCommand({
            //     Bucket: env.S3_BUCKET_NAME,
            //     Key: `${ctx.session.user.id}/${input.bgimageId}`,
            // });

            // const url = await getSignedUrl(client, params);
            const url = `https://${env.S3_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/${ctx.session.user.id}/${input.bgimageId}`

            return url;
        }),

    getPresigneURL: protectedProcedure
        .input(z.object({
            bgimageId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            const params = new PutObjectCommand({
                Bucket: env.S3_BUCKET_NAME,
                Key: `${ctx.session.user.id}/${input.bgimageId}`,
                ContentType: 'image/jpeg',
            });
            const url = await getSignedUrl(client, params, { expiresIn: 3600 });

            return url;
        }),

    getUserInfo: publicProcedure
        .input(z.object({
            userId: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const result = await ctx.db.user.findFirst({
                where: {
                    id: input.userId,
                }
            });

            return result;
        }),
});
