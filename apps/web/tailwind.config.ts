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
        background: {
          primary: {
            DEFAULT: "var(--background-primary)",
          },
          secondary: {
            DEFAULT: "var(--background-secondary)",
          },
        },
        text: {
          primary: {
            DEFAULT: "var(--text-primary)",
            hover: "var(--text-primary-hover)",
            active: "var(--text-primary-active)",
            onFill: "var(--text-primary-on-fill)",
          },
          secondary: {
            DEFAULT: "var(--text-secondary)",
            hover: "var(--text-secondary-hover)",
            active: "var(--text-secondary-active)",
            onFill: "var(--text-secondary-on-fill)",
          },
          brand: {
            DEFAULT: "var(--text-brand)",
            hover: "var(--text-brand-hover)",
            active: "var(--text-brand-active)",
            onFill: "var(--text-brand-on-fill)",
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
            DEFAULT: "var(--fill-primary)",
            hover: "var(--fill-primary-hover)",
            active: "var(--fill-primary-active)",
            selected: "var(--fill-primary-selected)",
          },
          brand: {
            DEFAULT: "var(--fill-brand)",
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
