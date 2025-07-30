'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, Phone, Check } from 'lucide-react'
import FloatingWhatsAppButton from './FloatingWhatsAppButton'

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
  'ליווי צמוד של מורה מנוסה לאורך כל שנת הלימודים',
  'לכל הרמות החל מכיתה ז\' ועד יב\'',
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
    <div className="min-h-screen flex flex-col lg:flex-row pt-16 md:pt-20 lg:pt-0">
      <FloatingWhatsAppButton />
      
      {/* חלק הטקסט - במסך טלפון יהיה ראשון וימלא את המסך */}
      <div className="w-full lg:w-1/2 relative overflow-hidden h-auto lg:min-h-screen">
        <div
          className="w-full h-full min-h-[60vh] lg:min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero-section/right-static/1.jpeg')` }}
        >
          {/* Overlay קל לטקסט */}
          <div className="absolute inset-0 bg-white/20"></div>

          {/* תוכן מוביל - על התמונה */}
          <div className="relative z-20 h-full flex flex-col justify-between py-8 lg:py-20 px-4 lg:px-8">
            {/* רקע חצי שקוף לטקסט במסך טלפון */}
            <div className="absolute inset-0 bg-white/30 lg:bg-transparent rounded-lg lg:rounded-none"></div>
            
            {/* חלק עליון - כותרת וברכה */}
            <div className="text-center pt-8 lg:pt-10 relative z-10">
              <motion.h1
                className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 lg:mb-8 text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                מורה פרטי למתמטיקה
              </motion.h1>

              <motion.div
                className="font-suez-one text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-8 text-black drop-shadow-lg hover:text-blue-600 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                היי! שמי אבי פילוסוף, ברוכים הבאים לאתר שלי!
              </motion.div>
            </div>

            {/* חלק תחתון - יתרונות וכפתור */}
            <div className="text-center pb-8 lg:pb-10 relative z-10">
              <motion.div
                className="font-alef space-y-3 lg:space-y-6 mb-6 lg:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-center space-x-2 lg:space-x-3 space-x-reverse justify-center hover:bg-white/10 rounded-lg px-2 lg:px-4 py-1 lg:py-2 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: -5 }}
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-blue-500 flex-shrink-0 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-alef-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-blue-500 drop-shadow-lg group-hover:text-blue-700 transition-colors duration-300">{advantage}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white text-base sm:text-lg lg:text-xl px-6 lg:px-8 py-3 lg:py-4 rounded-lg flex items-center space-x-2 lg:space-x-3 space-x-reverse mx-auto transition-all duration-300"
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
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <span>התקשרו! 052-8284808</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* חלק שמאל - סליידר תמונות - במסך טלפון יהיה מתחת לטקסט */}
      <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[40vh] lg:min-h-screen">
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
          className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1 lg:p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        >
          <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1 lg:p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        >
          <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6" />
        </button>

        {/* כפתור play/pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-2 lg:top-4 left-2 lg:left-4 bg-white/20 hover:bg-white/30 text-white p-1 lg:p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
        >
          {isPlaying ? <Pause className="w-4 h-4 lg:w-5 lg:h-5" /> : <Play className="w-4 h-4 lg:w-5 lg:h-5" />}
        </button>

        {/* נקודות ניווט */}
        <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 lg:space-x-2 space-x-reverse z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
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