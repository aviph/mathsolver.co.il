/** @type {import('next').NextConfig} */
const nextConfig = {
  // הגדרת allowedDevOrigins לפתרון בעיית Cross origin request
  allowedDevOrigins: [
    '10.100.102.80', // כתובת ה-IP שמופיעה באזהרה
    'localhost',
    '127.0.0.1'
  ],
  
  // הגדרות נוספות שיכולות להיות שימושיות
  experimental: {
    // אם אתה משתמש ב-App Router
    appDir: true,
  },
  
  // הגדרות תמונות אם נדרש
  images: {
    domains: [],
    remotePatterns: [],
  },
}

module.exports = nextConfig 