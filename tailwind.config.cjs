/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '808px',
    },
    extend: {
      colors: {
        gray: {
          750: '#333333',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
