import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      keyframes: {
        heroPopUp: {
          "0%": {
            opacity: "0%",
            filter: "blur(2px)",
          },
          "100%": {
            opacity: "100%",
            filter: "blur(0px)",
          },
        },
        mainBlurToClear: {
          "0%": {
            filter: "blur(10px)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
        resumeAnimation: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.05)",
          },
        },
      },
      animation: {
        heroPopUp: "heroPopUp 3s ease-in-out forwards",
        resumeAnimation: "resumeAnimation 3s. ease-in-out",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        hover: {
          hoverColor: "hsla(var(--hover-bg-color))",
          textHoverWhite: "hsla(0, 0%, 100%)",
        },
        custom: {
          fontColor: "hsla(var(--font-color))",
          backgroundColor: "hsla(var(--background-color))",
          containerColor: "hsla(var(--container-color))",
          borderColor: "hsla(var(--border-color))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        satoshi: [`var(--font-satoshi)`, "sans-serif"],
        satoshiItalic: [`var(--font-satoshiItalic)`, "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
