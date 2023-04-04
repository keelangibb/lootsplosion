import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  getByIdSchema,
  getByManufacturerIdSchema,
} from "~/shared/schema/weapons.schema";

export const weaponsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.weapon.findMany({
      include: {
        // rarity: { select: { name: true } },
        // type: { select: { name: true } },
        // manufacturer: { select: { name: true } },
        ElementCombination: {
          select: {
            Elements: {
              select: { name: true, picture: true },
            },
          },
        },
        // content: { select: { name: true } },
        Sources: true,
        DropChances: {
          include: { Source: { select: { name: true, DropChance: true } } },
        },
      },
    });
  }),

  getById: publicProcedure.input(getByIdSchema).query(({ ctx, input }) => {
    return ctx.prisma.weapon.findUnique({
      where: { id: input.weaponId },
    });
  }),

  getByManufacturerId: publicProcedure
    .input(getByManufacturerIdSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.weapon.findMany({
        where: { id: input.manufacturerId },
      });
    }),

  getRarity: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.rarity.findMany();
  }),
});
