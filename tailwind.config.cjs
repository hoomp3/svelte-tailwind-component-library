const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      modes: {

      }
    },
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      bold: ['Roboto']
    },
    colors: {
      purple: {
        DEFAULT: '#6D4593',
        light: '#965BD3'
      },
      navy: {
        DEFAULT: '#454F82',
        light: '#6D7EE5'
      },
      green: {
        DEFAULT: '#CEEE86'
      },
      blue: {
        DEFAULT: '#7B61FF'
      },
      black: '#26262C',
      ...colors
    }
  },
  plugins: [require('daisyui')]
};
