require("dotenv").config({
  path: "../../.env",
});

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", process.env.CMS_API_URL],
  },
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `${process.env.CMS_API_URL}/api/:path*`,
        basePath: false,
      },
      {
        source: `/files/:path*`,
        destination: `${process.env.CMS_API_URL}/files/:path*`,
        basePath: false,
      },
    ];
  },
  env: {
    CMS_API_URL: process.env.CMS_API_URL,
    WEB_URL: process.env.WEB_URL,
    MANATAL_TOKEN: process.env.MANATAL_TOKEN,
    GMAPS_TOKEN: process.env.GMAPS_TOKEN,
  },
};
