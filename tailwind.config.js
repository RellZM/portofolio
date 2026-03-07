/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#F5C518",
        background: "#FFFFFF",
        "text-dark": "#000000",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        drama: ["Space Grotesk", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
