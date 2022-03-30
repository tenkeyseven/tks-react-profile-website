const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCAD4',
        'secondary': '#B0D0D3',
        'tertiary': '#C08497',
        'quaternary': '#F7AF9D',
      },
      fontFamily: {
        'thick': ['"Gravitas One"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #F7AF9D, #B0D0D3)',
        'gradient-primary-bottom': 'linear-gradient(to bottom, #F7AF9D, #B0D0D3)',
        'daisy': 'url("/public/photography/daisy.jpg")',
      }
    },
  },
  plugins: [],
};
// 1. 0xFFCAD4
// 2. 0xB0D0D3
// 3. 0xC08497
// 4. 0xF7AF9D