const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withNextIntl = require("next-intl/plugin")(
  "./src/domain/locale/matcher.ts"
);
const compose = require("./scripts/compose");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    appDir: true,
  },
};

const withVanillaExtract = createVanillaExtractPlugin();

const plugins = [withVanillaExtract, withNextIntl];

module.exports = compose(nextConfig, plugins);
