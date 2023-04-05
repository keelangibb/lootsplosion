import { z } from "zod";

export const getByIdSchema = z.object({ sourceId: z.string() });
