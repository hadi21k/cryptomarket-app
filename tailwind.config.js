module.exports = {
  mode: "jit",
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
