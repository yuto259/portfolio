import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          950: "#071014",
          900: "#0b161b",
          850: "#101e24",
          800: "#14262d",
        },
        accent: {
          300: "#9be7c6",
          400: "#67d8b2",
          500: "#2fbf9f",
          600: "#22967f",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(103 216 178 / 0.22), 0 18px 60px rgb(0 0 0 / 0.28)",
      },
    },
  },
  plugins: [forms],
};

export default config;
