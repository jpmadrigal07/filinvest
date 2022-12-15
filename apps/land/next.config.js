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
        destination: `http://localhost:9000/api/:path*`,
        basePath: false,
      },
      {
        source: `/files/:path*`,
        destination: `http://localhost:9000/files/:path*`,
        basePath: false,
      },
    ];
  },
};
