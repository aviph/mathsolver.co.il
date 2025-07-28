import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";
import BackgroundTiles from "./BackgroundTiles";
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Nachliel Pokroy | Frontend Developer Portfolio",
  description:
    "Frontend Developer with expertise in React, TypeScript, and modern web development. View my projects, experience, and skills.",
  keywords:
    "Frontend Developer, React Developer, TypeScript, JavaScript, Web Development, Software Engineer, Frontend Developer, Backend Developer, נחליאל, פוקורי, נחליאל פוקרוי, nachliel pokroy, nachliel, pokroy",
  authors: [{ name: "Nachliel Pokroy" }],
  creator: "Nachliel Pokroy",
  publisher: "Nachliel Pokroy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://cv.nachli.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cv.nachli.com",
    siteName: "Nachliel Pokroy Portfolio",
    title: "Nachliel Pokroy | Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and modern web technologies",
    images: [
      {
        url: "/profile.jpg",
        width: 150,
        height: 150,
        alt: "Nachliel Pokroy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nachliel Pokroy | Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and modern web technologies",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/NP.svg",
    apple: "/NP.svg",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} `}>
        <BackgroundTiles />
        {children}
      </body>
    </html>
  );
}
