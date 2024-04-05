import { z } from "zod";

export const environmentSchema = z.object({
  AUTHORIZATION: z.string().optional(),
});

export const env = environmentSchema.parse(process.env);
