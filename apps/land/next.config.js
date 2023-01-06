if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: "../../.env",
  });
}

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost"],
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
};
