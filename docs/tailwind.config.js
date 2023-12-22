/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './docs/**/*.{js,ts,jsx,tsx,mdx}',
    './blog/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  corePlugins: {
    preflight: false,
  },
  plugins: [require('tailwindcss-logical'), require('./src/tailwind/plugin')],
  theme: {
    extend: {},
  }
}
