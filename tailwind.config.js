/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        bgAlt: "rgb(var(--color-bg-alt) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        inkSoft: "rgb(var(--color-ink-soft) / <alpha-value>)",
        rose: "rgb(var(--color-rose) / <alpha-value>)",
        roseDeep: "rgb(var(--color-rose-deep) / <alpha-value>)",
        roseWash: "rgb(var(--color-rose-wash) / <alpha-value>)",
        accentBlue: "rgb(var(--color-accent-blue) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

