'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AboutSection from '@/components/AboutSection'
import AdvantagesSection from '@/components/AdvantagesSection'
import YouTubeSection from '@/components/YouTubeSection'
import StudentsSection from '@/components/StudentsSection'
import ContactSection from '@/components/ContactSection'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // סימולציה של טעינה
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-math-blue">
        <div className="text-center text-white">
          <div className="text-6xl mb-4 animate-pulse-slow">π</div>
          <div className="text-2xl font-hebrew">MathSolver - WSL Fixed!</div>
          <div className="text-lg mt-2">טוען...</div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* סרגל התקדמות */}
      <ScrollProgress />
      
      {/* Header קבוע */}
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <HeroSection />
      </section>
      
      {/* מספרים עלי... */}
      <section id="testimonials" className="section gradient-math-purple">
        <TestimonialsSection />
      </section>
      
      {/* מי אני? */}
      <section id="about" className="section-alt">
        <AboutSection />
      </section>
      
      {/* היתרונות שלי */}
      <section id="advantages" className="section gradient-math-green">
        <AdvantagesSection />
      </section>
      
      {/* ערוץ היוטיוב שלי */}
      <section id="youtube" className="section-alt">
        <YouTubeSection />
      </section>
      
      {/* אני והתלמידים */}
      <section id="students" className="section gradient-math-orange">
        <StudentsSection />
      </section>
      
      {/* דברו איתי */}
      <section id="contact" className="section-alt">
        <ContactSection />
      </section>
    </main>
  )
} 