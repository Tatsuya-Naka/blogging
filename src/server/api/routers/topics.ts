import { Description } from "@headlessui/react";
import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure
} from "~/server/api/trpc";

export const topicRouter = createTRPCRouter({
    changeStatus: protectedProcedure
    .input(z.object({
        topicId: z.string(),
        isPrivate: z.boolean(),
    }))
    .mutation(async ({ctx, input}) => {
        const result = await ctx.db.topic.update({
            where: {
                userId: ctx.session.user.id,
                id: input.topicId,
            },
            data: {
                isPrivate: input.isPrivate,
            },
        });
        
        return result;
    }),

    saveTopic: protectedProcedure
    .input(z.object({
        bgImageId: z.string(),
        title: z.string(),
        description: z.string(),
        postId: z.string(),
        bgImageUrl: z.string(),
    }))
    .mutation(async({ctx, input}) => {
        const updateBg = await ctx.db.bgImage.update({
            where: {
                id: input.bgImageId,
                userId: ctx.session.user.id,
            },
            data: {
                url: input.bgImageUrl,
            }
        });

        const result = await ctx.db.topic.update({
            where: {
                userId: ctx.session.user.id,
                id: input.postId,
            },
            data: {
                title: input.title,
                description: input.description,
            }
        });

        return result;
    }),

    getAccountProfile: publicProcedure
        .input(z.object({
            userId: z.string(),
        }))
        .query(async({ctx, input}) => {
            const result = await ctx.db.topic.findMany({
                where: {
                    userId: input.userId,
                    isPrivate: false,
                },
                include: {
                    user: true,
                }
            });

            return result;
        }),

    getSearching: publicProcedure
        .input(z.object({
            typing: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const result = await ctx.db.topic.findMany({
                where: {
                    title: {
                        contains: input.typing,
                        mode: "insensitive",
                    },
                    isPrivate: false
                },
                include: {
                    user: true
                }
            });

            return result;
        }),

    getSearchingLimits: publicProcedure
        .input(z.object({
            typing: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const result = await ctx.db.topic.findMany({
                where: {
                    title: {
                        contains: input.typing,
                        mode: "insensitive",
                    },
                },
                take: 5,
                include: {
                    user: true
                }
            });
            // const [firstResult, ...restOfResult] = result;
            // return {
            //     firstResult,
            //     restOfResult
            // };
            return result;
        }),

    deleteTopic: publicProcedure
        .input(z.object({
            topicId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.topic.delete({
                where: {
                    id: input.topicId,
                }
            })
        }),


    getTopicsAllOne: publicProcedure
        .query(async ({ ctx }) => {
            const topics = await ctx.db.topic.findMany({
                where: {
                    userId: ctx.session?.user.id,
                },
                include: {
                    user: true,
                }
            });
            return topics;
        }),

    getTopicsAll: publicProcedure
        .query(async ({ ctx }) => {
            const topics = await ctx.db.topic.findMany({
                where: {
                    isPrivate: false,
                },
                include: {
                    user: true,
                    bgimage: true,
                }
            });

            const [firstTopic, ...restOfTopic] = topics;

            return {
                firstTopic,
                restOfTopic
            };
        }),

    getTopic: publicProcedure
        .input(z.object({
            userId: z.string(),
            topicId: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            return await ctx.db.topic.findFirst({
                where: {
                    userId: input.userId,
                    id: input.topicId,
                },
                include: {
                    user: true, // This will include the related User data
                    bgimage: true,
                    // Optionally include other related data if needed
                },
            });
        }),

    getAll: protectedProcedure
        .query(async ({ ctx }) => {
            return await ctx.db.topic.findMany({
                where: {
                    userId: ctx.session.user.id,
                }
            });
        }),

    create: protectedProcedure
        .input(z.object({
            title: z.string(),
            description: z.string(),
            // tags: z.array(z.string()),    // Correct definition for tags
            // images: z.array(z.string()),  // Correct definition for images
            bgimageId: z.string(),         // Single string for bgimage
            bgImageUrl: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            const bgImage = await ctx.db.bgImage.update({
                where: {
                    id: input.bgimageId,
                },
                data: {
                    url: input.bgImageUrl,
                },
            });

            return await ctx.db.topic.create({
                data: {
                    userId: ctx.session.user.id,
                    title: input.title,
                    description: input.description,
                    bgimageId: input.bgimageId,
                    // // Create the tags relationship
                    // tags: {
                    //     create: input.tags.map((tag) => ({
                    //         tag: {
                    //             connectOrCreate: {
                    //                 where: { name: tag },
                    //                 create: { name: tag }
                    //             }
                    //         },
                    //     })),
                    // },
                    // // Create the images relationship
                    // images: {
                    //     create: input.images.map((image) => ({
                    //         url: image
                    //     })),
                    // },
                    // // Create a single background imag
                }
            });
        }),
});
