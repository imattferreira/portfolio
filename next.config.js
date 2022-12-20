const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    appDir: true,
  },
};

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(nextConfig);
