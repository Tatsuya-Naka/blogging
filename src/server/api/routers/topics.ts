import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure
} from "~/server/api/trpc";

export const topicRouter = createTRPCRouter({
    getAccountProfile: publicProcedure
        .input(z.object({
            userId: z.string(),
        }))
        .query(async({ctx, input}) => {
            const result = await ctx.db.topic.findMany({
                where: {
                    userId: input.userId,
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
                // where: {
                //     isPrivate: false,
                // },
                include: {
                    user: true,
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
            bgimages: z.string(),         // Single string for bgimage
        }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.topic.create({
                data: {
                    userId: ctx.session.user.id,
                    title: input.title,
                    description: input.description,
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
                    // // Create a single background image
                    bgimages: {
                        create: {
                            url: input.bgimages
                        },
                    },
                }
            });
        }),
});
