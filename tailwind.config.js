// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }, 
    fontFamily: {
      title: ['League Spartan', ...defaultTheme.fontFamily.sans],
      logo: ['Manjari', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        lightBlue: '#223E6C',
        darkBlue: '#160E46',
        orange: '#B0673b',
      }
    },
  },
  plugins: [],
}
