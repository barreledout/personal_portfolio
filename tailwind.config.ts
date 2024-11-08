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
        accent: {},
        hover: {
          hoverColor: "hsla(var(--hover-bg-color))",
          textHoverWhite: "hsla(0, 0%, 100%)",
        },
        custom: {
          fontColor: "hsla(var(--font-color))",
          backgroundColor: "hsla(var(--background-color))",
          containerColor: "hsla(var(--container-color))",
          borderColor: "hsla(var(--border-color))"
        },
      },
      fontFamily: {
        satoshi: [`var(--font-satoshi)`, "sans-serif"],
        satoshiItalic: [`var(--font-satoshiItalic)`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
