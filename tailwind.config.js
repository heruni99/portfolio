/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FDFBF8",
        bgAlt: "#F8F2EF",
        ink: "#2B2321",
        inkSoft: "#766863",
        rose: "#C06A82",
        roseDeep: "#9C4F65",
        roseWash: "#F5DEE4",
        line: "#E9DFDA",
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
