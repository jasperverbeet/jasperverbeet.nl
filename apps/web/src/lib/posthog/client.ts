import createClient from "openapi-fetch";
import type { paths } from "./generated/schema";
import serverEnv from "@/server.env";

const posthogClient = createClient<paths>({
  baseUrl: serverEnv.POSTHOG_HOST,
  headers: {
    Authorization: `Bearer ${serverEnv.POSTHOG_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export default posthogClient;
