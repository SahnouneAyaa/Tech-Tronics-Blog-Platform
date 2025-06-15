/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  // Add this line to transpile the problematic package
  transpilePackages: ['react-lite-youtube-embed'],
};

module.exports = nextConfig;