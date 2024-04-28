/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote", "shiki"],
  rewrites: () => {
    return [
      {
        // This rewrite allows us to proxy requests to the PostHog instance so that trackers don't block it
        source: "/ph/:path*",
        destination: `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/:path*`,
      },
    ];
  },
};

export default nextConfig;
