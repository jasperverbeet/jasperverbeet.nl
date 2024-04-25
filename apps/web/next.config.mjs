/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => {
    return [
      {
        source: "/ph/:path*",
        destination: `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/:path*`,
      },
    ];
  },
};

export default nextConfig;
