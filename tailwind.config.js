module.exports = {
  content: ["./routes/**/*.{html,js,tsx}", "./components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
