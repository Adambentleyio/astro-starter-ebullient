/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Roboto', ...defaultTheme.fontFamily.sans],
        title: ['Anton']
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
