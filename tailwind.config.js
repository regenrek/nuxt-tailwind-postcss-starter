const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'PT Mono',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  },
  variants: {},
  plugins: []
};
