/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linkedin: '#0077b5',
        twitter: '#1DA1F2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
