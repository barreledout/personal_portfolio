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
          },
          "100%": {
            opacity: "100%",
          },
        },
      }, animation: {
        heroPopUp: 'heroPopUp 3s ease-in-out'
      },
      colors: {
        accent: {},
        hover: {
          hoverColor: "hsla(var(--hover-bg-color))",
        },
        backgroundColor: "hsla(var(--background-color))",
        containerColor: "hsla(var(--container-color))",
        fontColor: "hsla(var(--font-color))",
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
