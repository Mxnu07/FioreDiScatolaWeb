/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Soft organic olive — mirrors former rose scale (50–950) for same visual hierarchy
        olive: {
          50: "#f7f8f4",
          100: "#eceee6",
          200: "#d6dbc9",
          300: "#b4bf9f",
          400: "#8f9f76",
          500: "#6f8159",
          600: "#576647",
          700: "#465239",
          800: "#3b4430",
          900: "#323a2a",
          950: "#1a1f16",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
      },
      boxShadow: {
        soft: "0 10px 35px -15px rgba(0,0,0,0.25)",
      },
      keyframes: {
        "catalog-in": {
          "0%": { opacity: "0.88", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "catalog-in": "catalog-in 0.28s ease-out both",
      },
    },
  },
  plugins: [],
};
