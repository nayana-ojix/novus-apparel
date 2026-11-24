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
        novus: {
          // Deep Navy Spectrum (Trust & Corporate Authority)
          navy: {
            deepest: "#040814",
            dark: "#081024",
            DEFAULT: "#0D1836",
            surface: "#122046",
            border: "#1C2F60",
            light: "#253A74",
          },
          // Rich Teal & Emerald (Freshness, Clean Tech & Innovation)
          teal: {
            deep: "#042F2E",
            DEFAULT: "#0F766E",
            vibrant: "#14B8A6",
            light: "#5EEAD4",
            glow: "rgba(20, 184, 166, 0.15)",
          },
          emerald: {
            deep: "#022C22",
            DEFAULT: "#059669",
            light: "#10B981",
            glow: "rgba(16, 185, 129, 0.18)",
          },
          // Warm Ivory & Off-White (Elegance & Tactile Luxury)
          ivory: {
            DEFAULT: "#FAF9F5",
            warm: "#F5F2EB",
            muted: "#EAE5D9",
            sand: "#DDD5C7",
          },
          // Muted Gold & Champagne (Premium Heritage & Prestige Accents)
          gold: {
            muted: "#C5A880",
            DEFAULT: "#D4AF37",
            champagne: "#E5C98D",
            light: "#F3DEAA",
            bronze: "#9A7B56",
            glow: "rgba(212, 175, 55, 0.2)",
          },
          // Terracotta & Coral (Visual Energy & Modern Editorial Pop)
          coral: {
            DEFAULT: "#E06D53",
            vibrant: "#EB6B47",
            deep: "#B8472E",
            glow: "rgba(224, 109, 83, 0.18)",
          },
          // Neutral Base & Contrasts
          dark: {
            950: "#050811",
            900: "#090E1C",
            850: "#0E1528",
            800: "#141C34",
            700: "#222D4F",
            600: "#364370",
          },
          muted: "#8895B3",
        },
      },
      fontFamily: {
        serif: [
          "Cormorant Garamond",
          "Playfair Display",
          "Didot",
          "Bodoni MT",
          "Cinzel",
          "Georgia",
          "Cambria",
          "serif",
        ],
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SF Mono",
          "Consolas",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
        ultra: "0.3em",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.18)",
        "teal-glow": "0 0 25px rgba(20, 184, 166, 0.18)",
        "coral-glow": "0 0 25px rgba(224, 109, 83, 0.2)",
        "card-luxury": "0 10px 30px -10px rgba(4, 8, 20, 0.7)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "luxury-mesh": "radial-gradient(circle at 20% 20%, rgba(15, 118, 110, 0.12) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(224, 109, 83, 0.05) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
