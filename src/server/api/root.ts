import { weaponsRouter } from "~/server/api/routers/weapons";
import { createTRPCRouter } from "~/server/api/trpc";
import { elementsRouter } from "./routers/elements";
import { sourcesRouter } from "./routers/sources";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  weapons: weaponsRouter,
  elements: elementsRouter,
  sources: sourcesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
