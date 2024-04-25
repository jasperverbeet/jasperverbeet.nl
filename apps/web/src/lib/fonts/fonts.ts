import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const larsseit = localFont({
  src: [
    {
      path: "./Larsseit/Larsseit.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Larsseit/LarsseitItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Larsseit/LarsseitMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Larsseit/LarsseitMediumItalic.woff",
      weight: "500",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-larsseit",
});
