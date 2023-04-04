import { createTRPCRouter, publicProcedure } from "../trpc";

export const elementsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.element.findMany({
      select: { name: true, picture: true },
    });
  }),
});
