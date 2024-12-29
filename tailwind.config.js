/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5E2CA",
        "background-secondary": "#b8cbbe",
        primary: "#B85042",
        "text-contrast-green": "#003333",
        "text-contrast-red": "#621C1C",
        "background-third": "#AD3F3F",
        "indian-red": "#d66061",
        "shadow-cream": "#ebd5bb",
        // "dim-gray": "#685551",
        "dim-gray": "#4D3E3D"
      },
      fontFamily: {
        mainFont: ["Genos", "sans-serif"],
        boldFont: ["Genos", "sans-serif"],
        broadacre: ["broadacre-hairline-0", "sans-serif"],
        "broadacre-3": ["broadacre-hairline-3", "sans-serif"],
        "broadacre-text": ["broadacre-light-0", "sans-serif"]
      }
    }
  },
  plugins: []
};
