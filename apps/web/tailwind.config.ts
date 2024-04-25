import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
      heading: ["var(--font-larsseit)", ...fontFamily.sans],
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2rem", // 32px
      "5xl": "2.25rem", // 36px
      "6xl": "2.5rem", // 40px
      "7xl": "2.75rem", // 44px
      "8xl": "3.25rem", // 52px
    },
    lineHeight: {
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      7: "1.75rem", // 28px
      8: "2rem", // 32px
      9: "2.25rem", // 36px
      10: "2.5rem", // 40px
      11: "2.75rem", // 44px
      12: "3rem", // 48px
      13: "3.25rem", // 52px
      14: "3.5rem", // 56px
      15: "3.75rem", // 60px
      16: "4rem", // 64px
    },
    extend: {
      colors: {
        // Elements: bg, surface, fill, border, text, icon, link
        // Intents: {default}, brand, success, warning, danger, magic
        // States: hover, active, focus, disabled

        // bg-surface-primary
        // bg-fill-brand
        // bg-surface-success-primary
        // text-text-success-primary

        // {tailwind_modifier}-{element}-{intent}-{state}

        // text-text-brand-onFill

        text: {
          primary: {
            DEFAULT: "#1A202C",
          },
          secondary: {
            DEFAULT: "#75777C",
          },
          brand: {
            DEFAULT: "#266DF0",
            onFill: "#FAFCFF",
          },
        },
        background: {
          primary: {
            DEFAULT: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#FBFBFB",
          },
        },
        surface: {
          primary: {
            DEFAULT: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#FBFBFB",
          },
        },
        fill: {
          primary: {
            DEFAULT: "#FFFFFF",
            hover: "#FBFBFB",
            active: "#F4F5F6",
            selected: "#F4F5F6",
          },
          brand: {
            DEFAULT: "#266DF0",
          },
        },
        border: {
          primary: {
            DEFAULT: "#E6E7EA",
            hover: "#D1D3D6",
            active: "#266DF0",
            selected: "#266DF0",
          },
          secondary: {
            DEFAULT: "#EEEFF1",
          },
          brand: {
            DEFAULT: "#6A707C",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
