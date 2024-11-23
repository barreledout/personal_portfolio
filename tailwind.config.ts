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
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        learnMore: {
          "0%": {
            transform: "translateX(-10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(6px)",
            opacity: "1",
          },
        },
        learnMoreExit: {
          "0%": {
            transform: "translateX(6px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-10px)",
            opacity: "0",
          },
        },
        themeIcon: {
          //For the theme button icons (sun and moon)
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(40deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        heroPopUp: "heroPopUp 3s ease-in-out forwards",
        resumeAnimation: "resumeAnimation 3s. ease-in-out",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        shine: "shine var(--duration) infinite linear",
        learnMore: "learnMore 0.2s ease-in-out forwards",
        learnMoreExit: "learnMoreExit 0.2s ease-in-out forwards",
        themeIcon: "themeIcon 0.4s ease-in-out",
        cloudBounce1: "cloudBounce1 0.4s ease-in-out infinte",
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
          accentFontColor: "hsla(var(--accent-font-color))",
          backgroundColor: "hsla(var(--background-color))",
          containerColor: "hsla(var(--container-color))",
          borderColor: "hsla(var(--border-color))",
          drawerColor: "hsla(var(--drawer-color))",
          navbarHoverColor: "hsla(var(--navbar-hover))",
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
      backgroundImage: {
        "custom-gradient-light":
          "linear-gradient(-150deg, #cbb4a1, #fdfcfb 40%, #e2d1c3 90%, #cbb4a1)",
        "custom-gradient-dark":
          "linear-gradient(-210deg, #1e3c72 1%, #B8DCFF 70%, #2a5298 100%)",
        "custom-projectContainer-dark-gradient":
          "linear-gradient(180deg, #2f2f2f 1%, #222222 8%, #171717 100%)",
        "custom-projectContainer-light-gradient":
          "linear-gradient(180deg, #e3e6e8, #f3f4f7 100%)",
      },
      fontFamily: {
        satoshi: [`var(--font-satoshi)`, "sans-serif"],
        geistSans: ["var(--font-geist-sans)"],
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
