"use client";

import clientEnv from "@/client.env";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(clientEnv.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: new URL("/ph", window.location.origin).toString(),
  });
}

const PostHogProvider = ({ children }: React.PropsWithChildren) => {
  return <PHProvider client={posthog}>{children}</PHProvider>;
};

export default PostHogProvider;
