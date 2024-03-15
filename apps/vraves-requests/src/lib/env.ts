import { z } from "zod";

const envVariables = z.object({
  API_ROUTE: z.string().min(1),
  API_ROUTE_LOCAL: z.string().min(1),
  TURSO_AUTH_TOKEN: z.string().min(1),
  TURSO_URL: z.string().min(1),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export const env = envVariables.parse(process.env);
