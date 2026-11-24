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
          black: "#0D0D0E",
          richblack: "#121316",
          charcoal: "#1F2127",
          graphite: "#2C2F36",
          muted: "#7E838F",
          beige: {
            light: "#F7F5F0",
            DEFAULT: "#EFECE6",
            warm: "#E3DDD3",
            dark: "#C6BEB2",
            accent: "#B89B72",
          },
          ivory: "#FAF9F5",
          sand: "#DFD7CA",
          gold: "#C5A880",
          bronze: "#9A7B56",
        },
      },
      fontFamily: {
        serif: [
          "Cormorant Garamond",
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
        widest: "0.2em",
        ultra: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
