/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGray: '#F5F3F1',
        darkGray: '#989898',
        grafit: '#404040',
      },
    },
  },
  plugins: [],
}
