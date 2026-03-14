/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: { serverActions: true },
  async rewrites() {
    return [
      {
        source: '/api/telegram/:path*',
        destination: 'https://api.telegram.org/bot/:path*'
      }
    ];
  }
};
module.exports = nextConfig;
