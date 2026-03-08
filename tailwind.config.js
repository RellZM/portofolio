/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A14", // Deep Void
        accent: "#7B61FF", // Plasma
        background: "#F0EFF4", // Ghost
        "text-dark": "#18181B", // Graphite
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        drama: ["Instrument Serif", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
