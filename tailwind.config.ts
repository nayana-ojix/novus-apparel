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
        atelier: {
          obsidian: "#030712",
          navy: "#060B18",
          surface: "#0D1527",
          border: "#18233C",
          "border-light": "#2A3A60",
          gold: "#D4AF37",
          champagne: "#E5C98D",
          linen: "#F5F2EB",
          muted: "#94A3B8",
          emerald: "#10B981",
          "emerald-deep": "#022C22",
          terracotta: "#E06D53",
          coral: "#EB6B47",
        },
        novus: {
          navy: {
            deepest: "#030712",
            dark: "#060B18",
            DEFAULT: "#0D1836",
            surface: "#0D1527",
            border: "#18233C",
            light: "#253A74",
          },
          teal: {
            deep: "#042F2E",
            DEFAULT: "#0F766E",
            vibrant: "#14B8A6",
            light: "#5EEAD4",
          },
          emerald: {
            deep: "#022C22",
            DEFAULT: "#059669",
            light: "#10B981",
          },
          ivory: {
            DEFAULT: "#FAF9F5",
            warm: "#F5F2EB",
            muted: "#EAE5D9",
          },
          gold: {
            muted: "#C5A880",
            DEFAULT: "#D4AF37",
            champagne: "#E5C98D",
            light: "#F3DEAA",
            bronze: "#9A7B56",
          },
          coral: {
            DEFAULT: "#E06D53",
            vibrant: "#EB6B47",
            deep: "#B8472E",
          },
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        italiana: ["Italiana", "Cormorant Garamond", "serif"],
        serif: ["Italiana", "Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.03em",
        widest: "0.22em",
        ultra: "0.35em",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(212, 175, 55, 0.22)",
        "emerald-glow": "0 0 30px rgba(16, 185, 129, 0.2)",
        "terracotta-glow": "0 0 30px rgba(224, 109, 83, 0.2)",
        "atelier-card": "0 20px 40px -15px rgba(2, 6, 18, 0.85)",
      },
    },
  },
  plugins: [],
};
export default config;
