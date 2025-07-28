'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, Phone, Check } from 'lucide-react'

const heroImages = [
  {
    id: 1,
    src: '/images/hero-1.jpg',
    alt: 'אבי מלמד בכיתה',
    title: 'לימוד מתמטיקה בכיתה'
  },
  {
    id: 2,
    src: '/images/hero-2.jpg',
    alt: 'תלמידים מצליחים',
    title: 'תלמידים מצליחים'
  },
  {
    id: 3,
    src: '/images/hero-3.jpg',
    alt: 'סביבת לימוד מתקדמת',
    title: 'סביבת לימוד מתקדמת'
  }
]

const advantages = [
  'ליווי צמוד של מורה מנוסה',
  'לאורך כל שנת הלימודים לכל הרמות',
  'החל מכיתה ד ועד יב',
  'באזור נתניה ומושבי השרון'
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-math-blue text-white relative overflow-hidden">
      {/* רקע מתמטי */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl font-math animate-float">π</div>
        <div className="absolute top-20 right-20 text-4xl font-math animate-float" style={{ animationDelay: '1s' }}>∞</div>
        <div className="absolute bottom-20 left-20 text-5xl font-math animate-float" style={{ animationDelay: '2s' }}>∫</div>
        <div className="absolute bottom-10 right-10 text-3xl font-math animate-float" style={{ animationDelay: '0.5s' }}>∑</div>
      </div>

      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* סליידר תמונות - שמאל */}
          <motion.div
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-math-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <div className="text-2xl font-bold">{heroImages[currentImageIndex].title}</div>
                    <div className="text-lg opacity-80">תמונה {currentImageIndex + 1} מתוך {heroImages.length}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* כפתורי ניווט */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* כפתור play/pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            {/* נקודות ניווט */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* תוכן מוביל - ימין */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              מורה פרטי למתמטיקה
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              היי! שמי אבי פילוסוף, ברוכים הבאים לאתר שלי!
            </motion.div>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 space-x-reverse justify-center lg:justify-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-lg">{advantage}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="btn-primary text-xl px-8 py-4 flex items-center space-x-3 space-x-reverse mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <Phone className="w-6 h-6" />
              <span>התקשרו! 052-8284808</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 