import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // experimental: {
  //   turbo: {
  //     resolveExtensions: [".js", ".jsx", ".md", ".mdx", ".ts", ".tsx"],
  //   },
  // },
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

const withMDX = createMDX({});

export default withMDX(nextConfig);
