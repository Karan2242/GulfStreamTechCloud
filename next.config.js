/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,   // ✅ ADD THIS
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;