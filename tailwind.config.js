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
        gs: "#e56600",
        gm: "#feaf17",
        ge: "#fcc713",
        bs: "#1e093b",
        bh: "#015cda",
      },
    },
  },
};
