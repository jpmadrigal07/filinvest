const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    `pages/**/*.{js,ts,jsx,tsx}`,
    `components/**/*.{js,ts,jsx,tsx}`,
    `../../packages/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};