const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      width: {
        "112": "28rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
}
