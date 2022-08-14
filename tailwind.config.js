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
        txt: "#0f172a",
        gs: "#e11d48",
        gm: "#8b5cf6",
        ge: "#0ea5e9",
        bs: "#0f172a",
        bh: "#1e293b",
        bg: "#0f172a",
      },
    },
  },
};
