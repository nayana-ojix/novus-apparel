import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // NOVUS APPAREL — NEW CREATIVE DIRECTION
        cream: {
          DEFAULT: "#F3EBDD",
          light: "#F9F5EE",
          warm: "#EDE5D5",
        },
        olive: {
          DEFAULT: "#69744B",
          light: "#8A946E",
          dark: "#4D5636",
          50: "#F0F2E8",
        },
        burnt: {
          DEFAULT: "#D76C3F",
          light: "#E8956F",
          dark: "#B85530",
          50: "#FDF0EA",
        },
        sand: {
          DEFAULT: "#E4D6C0",
          light: "#EDE3D3",
          dark: "#D4C2A6",
        },
        sage: {
          DEFAULT: "#B9BEA4",
          light: "#D0D4C2",
          dark: "#9CA28A",
        },
        charcoal: {
          DEFAULT: "#282B24",
          light: "#3A3D35",
          dark: "#1A1C17",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
        ultra: "0.35em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
