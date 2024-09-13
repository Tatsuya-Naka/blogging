import { create } from "domain";
import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure
} from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
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