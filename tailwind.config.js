const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js',
  ],

  theme: {
    extend: {
      fontSize: {
        ...defaultTheme.fontSize,
        base: '0.9375rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: colors.sky,
        gray: colors.blueGray,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
