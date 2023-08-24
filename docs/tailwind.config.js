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
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-logical')]
}
