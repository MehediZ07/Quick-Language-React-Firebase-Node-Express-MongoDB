/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
      },

      dropShadow: {
        'custom': '1px 1px 2px black', 
      },
      screens: {
        'customs': "920px", 
      },
    },
  },
  plugins: [daisyui],
}
