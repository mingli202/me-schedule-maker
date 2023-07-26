/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat Alternates", "sans-serif"],
    },
    colors: {
      c1: "#caf0f8",
      c2: "#ade8f4",
      c3: "#90e0ef",
      c4: "#48cae4",
      c5: "#00b4d8",
      c6: "#0096c7",
      c7: "#0077b6",
      c8: "#023e8a",
      c9: "#03045e",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
