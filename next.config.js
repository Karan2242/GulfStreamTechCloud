/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,   // ✅ ADD THIS
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;