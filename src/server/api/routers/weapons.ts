import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  getByIdSchema,
  getByManufacturerIdSchema,
} from "~/shared/schema/weapons.schema";

export const weaponsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.weapon.findMany({
      include: {
        elements: {
          select: { name: true },
        },
        sources: { select: { id: true, name: true } },
      },
    });
  }),

  getById: publicProcedure.input(getByIdSchema).query(({ ctx, input }) => {
    return ctx.prisma.weapon.findUnique({
      where: { id: input.weaponId },
      include: {
        elements: {
          select: { name: true },
        },
        sources: { select: { id: true } },
      },
    });
  }),

  getByManufacturerId: publicProcedure
    .input(getByManufacturerIdSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.weapon.findMany({
        where: { id: input.manufacturerId },
      });
    }),
});
