"use client";

import PostHogProvider from "@/lib/posthog/components/PostHogProvider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <PostHogProvider>{children}</PostHogProvider>;
};

export default Providers;
