import { z } from "zod";

export const environmentSchema = z.object({
  AUTHORIZATION: z.string().optional(),
  REDIS_URL: z.string().url().optional(),
  REDIS_PUBLIC_URL: z.string().url().optional(),
});

export const env = environmentSchema.parse(process.env);

console.table(env);
