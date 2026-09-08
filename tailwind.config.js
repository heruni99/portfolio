/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#111932",
        bgAlt: "#172342",
        ink: "#F8FAFC",
        inkSoft: "#94A3B8",
        rose: "#F43F5E",
        roseDeep: "#FB7185",
        roseWash: "#1C2744",
        line: "#233257",
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
