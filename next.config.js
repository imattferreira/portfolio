/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    legacyBrowsers: false
  },
  images: {
    domains: ['github.com']
  }
};

module.exports = nextConfig
