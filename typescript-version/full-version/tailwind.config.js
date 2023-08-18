/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-logical')]
}
