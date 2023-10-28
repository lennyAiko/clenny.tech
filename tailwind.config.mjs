/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#302B3D",
          50: "#877DA3",
          100: "#7C719B",
          200: "#685E85",
          300: "#564D6D",
          400: "#433C55",
          500: "#302B3D",
          600: "#16141C",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
