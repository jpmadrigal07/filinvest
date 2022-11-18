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
        "dark-cornflower-blue": "#163E82",
        "silver-chalice": "#ACACAC",
        "united-nations-blue": "#4389FF",
        jet: "#303030",
        "dim-gray": "#6B6B6B",
        "vivid-sky-blue": "#1AC5E8",
        "blue-ryb": "#0550E3",
        platinum: "#E2E2E2",
        "royal-dark-blue": "#012B72",
        "oxford-blue": "#001A47",
        red: "#FF0404",
        blue: "#0030EF",
        "sonic-silver": "#707070",
        "wild-blue-yonder": "#8A9EC0",
        "sea-green": "#0D8149",
        gainsboro: "#DBDBDB",
        "ghost-white": "#F5F8FE",
        "flickr-blue": "#115BEF",
        "alice-blue": "#E1E6EF",
      },
    },
  },
  plugins: [],
};
