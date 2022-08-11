const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primo: "#ff0000",
        txt: "#181818",
        bg: "#ffffff",
        bgHover: "#ff0000",
      },
    },
  },
};
