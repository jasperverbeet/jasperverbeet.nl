"use client";

import PostHogProvider from "@/lib/posthog/components/PostHogProvider";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <PostHogProvider>
      <ThemeProvider storageKey="jv:theme" themes={["light", "dark", "paper"]}>
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
};

export default Providers;
