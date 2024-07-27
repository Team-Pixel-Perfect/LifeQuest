/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblack: '#101010',
        gray: '#202020',
        lime: '#B2F042',
        lavender: '#B286FD',
        lovelyred: '#E55733',
      },
    },
  },
  plugins: [],
}

