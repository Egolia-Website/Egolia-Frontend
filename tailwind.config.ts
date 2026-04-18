import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        navy: {
          dark: "#0A1628",
          DEFAULT: "#0F1C3F",
          light: "#1A2B5C",
        },
        blue: {
          DEFAULT: "#2D5DAA",
          light: "#4A7BC7",
        },
        orange: {
          DEFAULT: "#E8792B",
          light: "#F09050",
        },
        gold: "#D4A843",
        gray: {
          light: "#F5F5F5",
          medium: "#E0E0E0",
          dark: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Google Sans", "Arial", "Helvetica", "sans-serif"],
        serif: ["var(--font-body)", "Google Sans", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
