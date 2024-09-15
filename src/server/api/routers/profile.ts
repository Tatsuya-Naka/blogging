import { create } from "domain";
import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure
} from "~/server/api/trpc";
import { env } from "~/env";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const client = new S3Client({
    region: env.AWS_REGION,
    credentials: {
        secretAccessKey: env.AWC_SECRET_ACCESS_KEY,
        accessKeyId: env.AWS_ACCESS_KEY_ID,
    },
});

export const profileRouter = createTRPCRouter({
    setSignedURL: protectedProcedure
    .query(async({ctx}) => {
        const url = `https://${env.S3_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/userImage/${ctx.session.user.id}`
        return url;
    }),

    getPresignedURL: protectedProcedure
    .mutation(async({ctx}) => {
        const params = new PutObjectCommand({
            Bucket: env.S3_BUCKET_NAME,
            Key: `userImage/${ctx.session.user.id}`,
            ContentType: 'image/jpeg',
        });
        const url = await getSignedUrl(client, params, {expiresIn: 3600});
        return url;
    }),

    getProfileInfo: publicProcedure
    .query(async ({ctx}) => {
        const result = await ctx.db.user.findFirst({
            where: {
                id: ctx.session?.user.id,
            },
        });

        return result;
    }),

    editProfile: publicProcedure
    .input(z.object({
        name: z.string(),
        image: z.string(),
        bio: z.string(),
    }))
    .mutation(async({ctx, input}) => {
        const result = await ctx.db.user.update({
            where: {
                id: ctx.session?.user.id,
            },
            data: {
                name: input.name,
                image: input.image,
                bio: input.bio,
            },
        });

        return result;
    }),
});