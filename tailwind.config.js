/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        pink: "#d946ef",
        dark: "#000",
        secondary: "#64748b",
        coklat: "#242323",
        abu: "#707070",
      },
      screens: {
        xl: "1280px",
      },
    },
  },

  plugins: [],
};
