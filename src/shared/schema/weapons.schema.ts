import { z } from "zod";

export const getByIdSchema = z.object({ weaponId: z.string() });
