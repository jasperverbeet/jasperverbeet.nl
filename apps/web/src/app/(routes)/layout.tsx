import "../globals.css";

import type { Metadata } from "next";
import Providers from "@/modules/root/components/Providers";
import { inter, jetbrains, larsseit } from "@/lib/fonts/fonts";
import dynamic from "next/dynamic";

export const preferredRegion = ["fra1"];

const PostHogPageView = dynamic(() => import("@/lib/posthog/components/PostHogPageView"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    absolute: "Jasper Verbeet's Blog",
    template: "%s - Jasper Verbeet's Blog",
  },
  description: "Writing about building products for the web.",
  authors: [{ name: "Jasper Verbeet", url: "https://www.linkedin.com/in/jasperverbeet/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${larsseit.variable} ${jetbrains.variable} ${inter.className} flex min-h-screen flex-col bg-background-primary`}
      >
        <Providers>
          <PostHogPageView />
          {children}
        </Providers>
      </body>
    </html>
  );
}
