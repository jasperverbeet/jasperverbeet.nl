"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

const PostHogPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (!pathname || !posthog) return;

    const url = new URL(pathname, window.origin);

    if (searchParams.toString()) {
      url.search = searchParams.toString();
    }

    posthog.capture("$pageview", {
      $current_url: url.toString(),
    });
  }, [pathname, searchParams, posthog]);

  return null;
};

export default PostHogPageView;
