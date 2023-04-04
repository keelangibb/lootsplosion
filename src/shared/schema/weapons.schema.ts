import { z } from "zod";

export const getByIdSchema = z.object({ weaponId: z.number() });
export const getByManufacturerIdSchema = z.object({
  manufacturerId: z.number(),
});
