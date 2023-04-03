import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getByIdSchema } from "~/shared/schema/weapons.schema";

export const weaponsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.weapon.findMany();
  }),
  getById: publicProcedure.input(getByIdSchema).query(({ ctx, input }) => {
    return ctx.prisma.weapon.findUnique({
      where: { id: input.weaponId },
    });
  }),
});
