import { z } from "zod";

const rawServerEnv = {
  NODE_ENV: process.env.NODE_ENV,
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
  })
  .parse(rawServerEnv);

export default serverEnv;
