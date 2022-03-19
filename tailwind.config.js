const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'thick': ['"Gravitas One"', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
};
