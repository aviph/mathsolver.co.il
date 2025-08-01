import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="he" dir="rtl">
      <Head>
        {/* ייבוא פונטים עבריים בסגנון כתב מחובר */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@400;500;600;700&family=Noto+Sans+Hebrew:wght@400;500;600;700&family=Heebo:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&family=Alef:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 