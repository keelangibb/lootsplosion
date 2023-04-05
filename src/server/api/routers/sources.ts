import { getByIdSchema } from "~/shared/schema/sources.schema";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const sourcesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.source.findMany();
  }),
  getById: publicProcedure.input(getByIdSchema).query(({ ctx, input }) => {
    return ctx.prisma.source.findUnique({
      where: {
        id: input.sourceId,
      },
    });
  }),
});
