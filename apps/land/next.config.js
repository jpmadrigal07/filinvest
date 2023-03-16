require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? "../../../.env" : "../../.env",
});

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", process.env.CMS_URL],
  },
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `${process.env.CMS_URL}/api/:path*`,
        basePath: false,
      },
    ];
  },
  env: {
    CMS_URL: process.env.CMS_URL,
    LAND_URL: process.env.LAND_URL,
    MANATAL_TOKEN: process.env.MANATAL_TOKEN,
    GMAPS_TOKEN: process.env.GMAPS_TOKEN,
    ZOHO_REFRESH_TOKEN: process.env.ZOHO_REFRESH_TOKEN,
    ZOHO_CLIENT_ID: process.env.ZOHO_CLIENT_ID,
    ZOHO_CLIENT_SECRET: process.env.ZOHO_CLIENT_SECRET,
    ZOHO_REFRESH_TOKEN_URL: process.env.ZOHO_REFRESH_TOKEN_URL,
    ZOHO_LEADS_URL: process.env.ZOHO_LEADS_URL,
  },
};
