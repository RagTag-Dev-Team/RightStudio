/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  corePlugins: {
    preflight: false
  },
  plugins: [require('tailwindcss-logical')],
  theme: {
    extend: {}
  }
}
