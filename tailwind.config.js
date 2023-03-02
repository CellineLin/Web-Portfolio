/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/bg.png')",
      },
      colors: {
        white: "#ffffff",
        violet: {
          1: "#c067e8",
          2: "#c47ee9",
          3: "#bba2fe",
        },
        yellow: {
          1: "#fdd63e",
          2: "ffd936",
        },
      },
    },
    fontFamily: {
      signature: ["Poppins"],
    },
  },
  plugins: [],
};
