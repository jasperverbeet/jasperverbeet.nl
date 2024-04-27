import { z } from "zod";

const rawServerEnv = {
  NODE_ENV: process.env.NODE_ENV,
  POSTHOG_API_KEY: process.env.POSTHOG_API_KEY,
  POSTHOG_HOST: process.env.POSTHOG_HOST,
  POSTHOG_PROJECT_ID: process.env.POSTHOG_PROJECT_ID,
};

const serverEnv = z
  .object({
    NODE_ENV: z
      .union([
        z.literal("development"),
        z.literal("preview"),
        z.literal("production"),
        z.literal("test"),
      ])
      .default("development"),
    POSTHOG_API_KEY: z.string().min(1),
    POSTHOG_HOST: z.string().default("https://eu.posthog.com"),
    POSTHOG_PROJECT_ID: z.string().default("21331"),
  })
  .parse(rawServerEnv);

export default serverEnv;
