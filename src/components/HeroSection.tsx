'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, Phone, Check } from 'lucide-react'

const heroImages = [
  {
    id: 1,
    src: '/images/hero-section/left-slider/Avi-hero-section2.jpg',
    alt: 'אבי פילוסוף',
    title: 'אבי פילוסוף'
  },
  {
    id: 2,
    src: '/images/hero-section/left-slider/2012-06-Shaked_Rotem.jpg',
    alt: 'שקד רותם',
    title: 'שקד רותם'
  },
  {
    id: 3,
    src: '/images/hero-section/left-slider/Avi-point.jpg',
    alt: 'אבי פילוסוף',
    title: 'אבי פילוסוף'
  },
  {
    id: 4,
    src: '/images/hero-section/left-slider/teaching_1.jpg',
    alt: 'אבי פילוסוף',
    title: 'אבי פילוסוף'
  },
  {
    id: 5,
    src: '/images/hero-section/left-slider/teaching_2.jpg',
    alt: 'אבי פילוסוף',
    title: 'אבי פילוסוף'
  },
  {
    id: 6,
    src: '/images/hero-section/left-slider/teaching_3.jpg',
    alt: 'אבי פילוסוף',
    title: 'אבי פילוסוף'
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
    <div className="min-h-screen flex">
      {/* חלק ימין - תמונה עם טקסט (50%) */}
      <div className="w-1/2 relative overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero-section/right-static/1.jpeg')` }}
        >
          {/* Overlay קל לטקסט */}
          <div className="absolute inset-0 bg-white/20"></div>

          {/* תוכן מוביל - על התמונה */}
          <div className="relative z-20 h-full flex flex-col justify-start pt-20">
            <div className="text-center px-8">
              <motion.h1
                className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                מורה פרטי למתמטיקה
              </motion.h1>

              <motion.div
                className="font-suez-one text-2xl md:text-3xl lg:text-4xl mb-8 text-black drop-shadow-lg hover:text-blue-600 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
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
                    className="flex items-center space-x-3 space-x-reverse justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 drop-shadow-lg" />
                    <span className="text-lg text-black drop-shadow-lg">{advantage}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-4 rounded-lg flex items-center space-x-3 space-x-reverse mx-auto transition-all duration-300"
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
            </div>
          </div>
        </div>
      </div>

      {/* חלק שמאל - סליידר תמונות (50%) */}
      <div className="w-1/2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex].src})` }}
            >
              {/* Overlay קל לקריאות */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* כפתורי ניווט */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* כפתור play/pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        {/* נקודות ניווט */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      </div>

    </div>
  )
} 