const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withNextIntl = require("next-intl/plugin")(
  "./src/domain/locale/matcher.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    appDir: true,
  },
};

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withNextIntl(withVanillaExtract(nextConfig));
