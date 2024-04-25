"use client";

import PostHogProvider from "./PostHogProvider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <PostHogProvider>{children}</PostHogProvider>;
};

export default Providers;
