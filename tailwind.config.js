module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
