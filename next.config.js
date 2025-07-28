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
  // הגדרות ל-WSL
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // שיפור file watching ב-WSL
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next']
      }
    }
    return config
  },
  // הגדרות נוספות ל-WSL
  experimental: {
    // שיפור file watching - הוסר כי לא נתמך בגרסה הנוכחית
  }
}

module.exports = nextConfig 