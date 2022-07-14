/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
  },
}

module.exports = nextConfig
