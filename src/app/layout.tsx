import type { Metadata } from 'next'
import './globals.css'

// ייבוא פונטים מ-Google Fonts
import { Rubik_Glitch, Suez_One, Heebo, Varela_Round } from 'next/font/google'

// הגדרת פונט Rubik Glitch
const rubikGlitch = Rubik_Glitch({
  weight: '400',
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik-glitch',
})

// הגדרת פונט Suez One
const suezOne = Suez_One({
  weight: '400',
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-suez-one',
})

// הגדרת פונט Heebo
const heebo = Heebo({
  weight: ['400', '500', '600'],
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
})

// הגדרת פונט Varela Round
const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-varela-round',
})

export const metadata: Metadata = {
  title: 'אבי פילוסוף - מורה פרטי למתמטיקה | www.mathsolver.co.il',
  description: 'מורה פרטי למתמטיקה מנוסה באזור נתניה והשרון. ליווי צמוד לכל הרמות, מכיתה ד ועד יב. תוצאות מוכחות עם מעל 15 שנות ניסיון.',
  keywords: 'מורה פרטי למתמטיקה, מתמטיקה, נתניה, השרון, שיעורים פרטיים, מתמטיקה לבגרות, מתמטיקה ליסודי, מתמטיקה לחטיבה',
  authors: [{ name: 'אבי פילוסוף' }],
  creator: 'אבי פילוסוף',
  publisher: 'MathSolver',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.mathsolver.co.il'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'אבי פילוסוף - מורה פרטי למתמטיקה',
    description: 'מורה פרטי למתמטיקה מנוסה באזור נתניה והשרון. ליווי צמוד לכל הרמות עם תוצאות מוכחות.',
    url: 'https://www.mathsolver.co.il',
    siteName: 'MathSolver',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'אבי פילוסוף - מורה פרטי למתמטיקה',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אבי פילוסוף - מורה פרטי למתמטיקה',
    description: 'מורה פרטי למתמטיקה מנוסה באזור נתניה והשרון',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${rubikGlitch.variable} ${suezOne.variable} ${heebo.variable} ${varelaRound.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3498db" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* ייבוא פונטים עבריים בסגנון כתב מחובר */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@400;500;600;700&family=Noto+Sans+Hebrew:wght@400;500;600;700&family=Heebo:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&family=Alef:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalService",
              "name": "אבי פילוסוף - מורה פרטי למתמטיקה",
              "description": "מורה פרטי למתמטיקה מנוסה באזור נתניה והשרון",
              "url": "https://www.mathsolver.co.il",
              "telephone": "+972-52-8284808",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "נתניה",
                "addressRegion": "השרון",
                "addressCountry": "IL"
              },
              "provider": {
                "@type": "Person",
                "name": "אבי פילוסוף",
                "jobTitle": "מורה פרטי למתמטיקה",
                "telephone": "+972-52-8284808"
              },
              "areaServed": {
                "@type": "Place",
                "name": "נתניה והשרון"
              },
              "serviceType": "שיעורים פרטיים במתמטיקה",
              "educationalLevel": ["יסודי", "חטיבת ביניים", "תיכון", "אקדמיה"]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 