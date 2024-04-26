"use client";

import PostHogProvider from "@/lib/posthog/PostHogProvider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <PostHogProvider>{children}</PostHogProvider>;
};

export default Providers;
