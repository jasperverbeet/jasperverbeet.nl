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
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
      heading: ["var(--font-larsseit)", ...fontFamily.sans],
      mono: ["var(--font-jetbrains)", ...fontFamily.mono],
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
        // Tokens
        background: {
          primary: {
            DEFAULT: "var(--background-primary)",
          },
          secondary: {
            DEFAULT: "var(--background-secondary)",
          },
          code: {
            DEFAULT: "var(--background-code)",
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
          code: {
            DEFAULT: "var(--text-code)",
            onFill: "var(--text-code-on-fill)",

            comment: "var(--text-code-comment)",
            punctuation: "var(--text-code-punctuation)",
            property: "var(--text-code-property)",
            selector: "var(--text-code-selector)",
            operator: "var(--text-code-operator)",
            variable: "var(--text-code-variable)",
            function: "var(--text-code-function)",
            keyword: "var(--text-code-keyword)",
          },
        },
        surface: {
          primary: {
            DEFAULT: "var(--surface-primary)",
          },
          secondary: {
            DEFAULT: "var(--surface-secondary)",
          },
          code: {
            DEFAULT: "var(--surface-code)",
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
          code: {
            DEFAULT: "var(--fill-code)",
          },
        },
        border: {
          primary: {
            DEFAULT: "var(--border-primary)",
            hover: "var(--border-primary-hover)",
            active: "var(--border-primary-active)",
            selected: "var(--border-primary-selected)",
          },
          secondary: {
            DEFAULT: "var(--border-secondary)",
          },
          brand: {
            DEFAULT: "var(--border-brand)",
          },
        },

        // Specialty tokens
        header: {
          surface: {
            DEFAULT: "var(--header-surface)",
          },
          border: {
            DEFAULT: "var(--header-border)",
          },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "inherit",
            "--tw-prose-headings": "inherit",
            "--tw-prose-lead": "inherit",
            "--tw-prose-links": "inherit",
            "--tw-prose-bold": "inherit",
            "--tw-prose-counters": "inherit",
            "--tw-prose-bullets": "inherit",
            "--tw-prose-hr": "inherit",
            "--tw-prose-quotes": "inherit",
            "--tw-prose-quote-borders": "inherit",
            "--tw-prose-captions": "inherit",
            "--tw-prose-code": "inherit",
            "--tw-prose-pre-code": "inherit",
            "--tw-prose-pre-bg": "inherit",
            "--tw-prose-th-borders": "inherit",
            "--tw-prose-td-borders": "inherit",
            "--tw-prose-kbd": "inherit",
            "--tw-prose-kbd-shadows": "inherit",
            "--tw-prose-invert-body": "inherit",
            "--tw-prose-invert-headings": "inherit",
            "--tw-prose-invert-lead": "inherit",
            "--tw-prose-invert-links": "inherit",
            "--tw-prose-invert-bold": "inherit",
            "--tw-prose-invert-counters": "inherit",
            "--tw-prose-invert-bullets": "inherit",
            "--tw-prose-invert-hr": "inherit",
            "--tw-prose-invert-quotes": "inherit",
            "--tw-prose-invert-quote-borders": "inherit",
            "--tw-prose-invert-captions": "inherit",
            "--tw-prose-invert-code": "inherit",
            "--tw-prose-invert-pre-code": "inherit",
            "--tw-prose-invert-pre-bg": "inherit",
            "--tw-prose-invert-th-borders": "inherit",
            "--tw-prose-invert-td-borders": "inherit",
            "--tw-prose-invert-kbd": "inherit",
            "--tw-prose-invert-kbd-shadows": "inherit",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
