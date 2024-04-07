import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fg: "var(rgba(--color-fg))",
        muted: "rgba(var(--color-fg), 0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
