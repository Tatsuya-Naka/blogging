import { postRouter } from "~/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
// import { imageRouter } from "./routers/image";
import { topicRouter } from "./routers/topics";
import { demoRouter } from "./routers/demo";
import { profileRouter } from "./routers/profile";
import { bgRouter } from "./routers/bgimage";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  // imageRouter,
  topic: topicRouter,
  profile: profileRouter,
  demo: demoRouter,
  bg: bgRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
