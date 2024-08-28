import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      sans: ["Poppins", "sans-serif"],
      colors: {
        primary: "#00A4E7",
        "primary-hover": "#008AC6",
        secondary: "#8ED2F7",
        tertiary: "#FE5707",
        "tertiary-hover": "#cf4604",
        background: "#01304E",
      },
    },
  },
  plugins: [],
};
export default config;
