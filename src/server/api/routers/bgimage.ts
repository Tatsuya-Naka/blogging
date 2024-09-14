import { create } from "domain";
import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure
} from "~/server/api/trpc";

export const bgRouter = createTRPCRouter({
    delete: protectedProcedure
    .input(z.object({
        bgImageId: z.string(),
    }))
    .mutation(async({ctx, input}) => {
        const result = await ctx.db.bgImage.delete({
            where: {
                id: input.bgImageId,
                userId: ctx.session.user.id,
            },
        });

        return result;
    }),

    create: protectedProcedure
    .input(z.object({
        userId: z.string(),
    }))
    .mutation(async({ctx, input}) => {
        const result = await ctx.db.bgImage.create({
            data: {
                userId: input.userId,
            }
        });

        return result;
    })
});