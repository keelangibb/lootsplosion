import { z } from "zod";

export const getByIdSchema = z.object({ weaponId: z.string() });
export const getByManufacturerIdSchema = z.object({
  manufacturerId: z.string(),
});
