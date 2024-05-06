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
        xs: { max: "430px" },
        sm: { min: "430px", max: "767px" }, // Small devices (e.g. phones)
        md: { min: "768px", max: "1024px" }, // Medium devices (e.g. tablets)
        "3xl": { min: "1586px", max: "1920px" },
      },
      fontFamily: {
        simplon: ['Simplon Norm', 'sans-serif'], // Example custom font family
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
