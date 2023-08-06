/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors:{
        blue: "#2cbce9",
        red:"#dc4492",
        yellow:"#fdcc49",
        grey:"#ededed",
        "deep-blue":"#010026",
        "dark-grey":"#757575",
        "opaque-black":"rgba(0,0,0,0.35)"
      }
    },
  },
  plugins: [],
};
