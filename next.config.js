/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

module.exports = nextConfig 