/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
      },
      boxShadow: {
        soft: "0 10px 35px -15px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
