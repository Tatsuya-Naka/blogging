import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import AWS from 'aws-sdk';
import { env } from "~/env";
// import { prisma } from '~/lib/prisma';

// // Configure AWS SDK
// const s3 = new AWS.S3({
//   accessKeyId: env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: env.AWC_SECRET_ACCESS_KEY,
//   region: env.AWS_REGION,
// });

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.post.create({
  //       data: {
  //         name: input.name,
  //         createdBy: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),

  // create: protectedProcedure
  //   .input(z.object({
  //     bgImageId: z.string().min(1, "Background image ID is required"),  // bgImageId must be a non-empty string
  //     title: z.string().min(1, "Title is required"),                    // Title must be non-empty
  //     description: z.string().optional().nullable(),                    // Description can be optional or null
  //     tags: z.array(z.string()).optional(),                             // Optional array of strings for tag IDs
  //     images: z.array(z.string().url()).optional(),                     // Optional array of valid URLs for images
  //   }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.post.create({
  //       data: {
  //         // userId: ctx.session.user.id,  // Assuming the user is authenticated
  //         bgImageId: input.bgImageId,
  //         title: input.title,
  //         description: input.description || null,  // Optional field
  //         // If you are adding existing tags, use the connect syntax
  //         tags: input.tags ? {
  //           connect: input.tags.map(tagId => ({ id: tagId }))
  //         } : undefined,
  //         // If you are adding images, use the create syntax for images
  //         images: input.images ? {
  //           create: input.images.map(url => ({ url }))
  //         } : undefined,
  //       },
  //     });
  //   }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      where: { userId: ctx.session.user.id },
    });

    return post ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  // getImageURL: protectedProcedure
  //   .input(
  //     z.object({
  //       file: z.any(), // You may need a more specific file schema
  //       folder: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {

  //     const params = {
  //       Bucket: env.S3_BUCKET_NAME!,
  //       Key: `${input.folder}/${input.file}`,
  //       // Body: file,
  //       Expires: 60, // URL expires in 60 seconds
  //       // ContentType: file.type,
  //       ContentType: 'image/jpeg',
  //       ACL: 'public-read',
  //     };

  //     return s3.getSignedUrlPromise('putObject', params);
  //   }),

  // uploadImage: protectedProcedure
  //   .input(z.object({
  //     bgImageId: z.string().min(1, "Background image ID is required"),  // bgImageId must be a non-empty string
  //     title: z.string().min(1, "Title is required"),                    // Title must be non-empty
  //     description: z.string().optional().nullable(),                    // Description can be optional or null
  //     tags: z.array(z.string()).optional(),                             // Optional array of strings for tag IDs
  //     images: z.array(z.string().url()).optional(),                     // Optional array of valid URLs for images
  //   }))
  //   .mutation(async ({ ctx, input }) => {
  //     // Check if the user is authenticated
  //     if (!ctx.session) {
  //       throw new Error('You must be logged in');
  //     }

  //     const userId = ctx.session.user.id;

  //     // Create a new post with the bgImageId and other data
  //     const post = await prisma.post.create({
  //       data: {
  //         bgImages: {
  //           create: {
  //             url: input.bgImageId,
  //           }
  //         },
  //         title: input.title,               // Post title
  //         description: input.description,   // Optional description
  //       },
  //     });

  //     // Return the signed URL promise for the bgImage in S3
  //     return new Promise((resolve, reject) => {
  //       s3.createPresignedPost(
  //         {
  //           Fields: {
  //             key: `${userId}/${post.bgimages.id}`,  // Use the bgImageId of the created post
  //           },
  //           Conditions: [
  //             ["starts-with", "$Content-Type", "image/"],  // Allow only images
  //             ["content-length-range", 0, 1000000],       // File size limit of 1MB
  //           ],
  //           Expires: 30,                                  // URL expires in 30 seconds
  //           Bucket: env.S3_BUCKET_NAME!,                  // Ensure your S3_BUCKET_NAME is set in your env
  //         },
  //         (err, signed) => {
  //           if (err) {
  //             return reject(err);  // Handle any errors during URL generation
  //           }
  //           resolve(signed);  // Resolve the promise with signed URL data
  //         }
  //       );
  //     });
  //   }),
});
