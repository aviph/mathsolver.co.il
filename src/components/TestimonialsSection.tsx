'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'קים ציסלביץ',
    grade: 'אחרי צבא - קורס השלמה ל 4 יחל',
    letterImage: '/images/testimonials-section/2012/2012-Kim.jpg',
  },
  {
    id: 2,
    name: 'שקד רותם',
    grade: 'כיתה י',
    letterImage: '/images/testimonials-section/2012/2012-06-Shaked_Rotem.jpg',
  },
  {
    id: 3,
    name: 'דוד רוזנברג',
    grade: 'כיתה יב',
    letterImage: '/images/testimonials-section/2013/2013-12-David_rozenberg.jpg',
  },

  // 2014
  {
    id: 4,
    name: 'דוד חסון',
    grade: 'כיתה ט',
    letterImage: '/images/testimonials-section/2014/2014-01_David_Hason.jpg',
  },
  {
    id: 5,
    name: 'נטע שור',
    grade: 'כיתה י',
    letterImage: '/images/testimonials-section/2014/2014-05_Neta_shor.jpg',
  },
  {
    id: 6,
    name: 'נור ישראלי',
    grade: 'כיתה יא',
    letterImage: '/images/testimonials-section/2014/2014-05_Nor_israeli2_1.jpg',
  },
  {
    id: 7,
    name: 'רועי הובר',
    grade: 'כיתה יב',
    letterImage: '/images/testimonials-section/2014/2014-05_Roi_Hover2.jpg',
  },
  {
    id: 8,
    name: 'ספיר כפרי',
    grade: 'כיתה יב',
    letterImage: '/images/testimonials-section/2014/2014-05_Sapir_cafri2.jpg',
  },
  {
    id: 9,
    name: 'סיגלית - אמא של רועי הובר',
    grade: '',
    letterImage: '/images/testimonials-section/2014/2014-05_sigalit_Roi_Hover.jpg',
  },
  {
    id: 10,
    name: 'בית ספר תפוז',
    grade: '',
    letterImage: '/images/testimonials-section/2014/2014-06_Tapuz_1.jpg',
  },
  {
    id: 11,
    name: 'דנה',
    grade: 'כיתה ח',
    letterImage: '/images/testimonials-section/2014/2014-07_Dana.jpg',
  },
  {
    id: 12,
    name: 'בית ספר תפוז',
    grade: '',
    letterImage: '/images/testimonials-section/2014/2014-Tapuz.jpg',
  },

  // 2015
  {
    id: 13,
    name: 'בית ספר לאה גולדברג',
    grade: '',
    letterImage: '/images/testimonials-section/2015/2015-02-05_lea_goldberg.jpg',
  },
  {
    id: 14,
    name: 'אריאל',
    grade: 'כיתה י',
    letterImage: '/images/testimonials-section/2015/2015-02-07_Ariel_1.jpg',
  },
  {
    id: 15,
    name: 'יהונתן אוברקלייד',
    grade: 'כיתה יב',
    letterImage: '/images/testimonials-section/2015/2015-05_Jonatan_Oberklide2.jpg',
  },
  {
    id: 16,
    name: 'מאי פרום',
    grade: 'כיתה יא',
    letterImage: '/images/testimonials-section/2015/2015-05-17_Mai_and_gal_1.jpg',
  },
  {
    id: 17,
    name: '1 רון לירוב',
    grade: 'כיתה ח',
    letterImage: '/images/testimonials-section/2015/2015-06-10_Ron_lirov2_1.jpg',
  },
  {
    id: 18,
    name: '2 רון לירוב',
    grade: 'כיתה ח',
    letterImage: '/images/testimonials-section/2015/2015-06-10_Ron2.jpg',
  },
  {
    id: 19,
    name: 'ספיר כפרי',
    grade: 'כיתה  יב',
    letterImage: '/images/testimonials-section/2015/2015-07-01_Sapir_Cafri_1.jpg',
  },
  {
    id: 20,
    name: 'בית ספר לאה גולדברג - 1',
    grade: '',
    letterImage: '/images/testimonials-section/2015/2015-LEa_Godberg_1.jpg',
  },
  {
    id: 21,
    name: 'הילי ואמילי',
    grade: 'כיתה ה',
    letterImage: '/images/testimonials-section/2015/2015-Lea_Goldbereg_HiliEmili_1.jpg',
  },
]

/////////////////////////////////////////////////////////////

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // חישוב האינדקסים של הסליידים הנראים
  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < testimonials.length; i++) {
      const diff = (i - currentIndex + testimonials.length) % testimonials.length
      if (diff <= 2) {
        slides.push({ index: i, position: diff })
      }
    }
    return slides
  }

  return (
    <div className="section text-white relative overflow-hidden">
      {/* רקע מתמטי */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-8xl font-math animate-float">∑</div>
        <div className="absolute bottom-20 right-20 text-6xl font-math animate-float" style={{ animationDelay: '1s' }}>∫</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-math animate-pulse-slow">π</div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-primary text-white mb-4">מספרים עלי...</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            המלצות אמיתיות מתלמידים שהצליחו עם השיטה שלי
          </p>
        </motion.div>

        {/* Showcase Slider */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative h-[600px] md:h-[700px]">
            {/* סליידים נראים */}
            <div className="relative w-full h-full">
              {getVisibleSlides().map(({ index, position }) => {
                const testimonial = testimonials[index]
                const isActive = position === 0
                const isNext = position === 1
                const isPrev = position === 2

                return (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${isActive
                      ? 'z-20 scale-100 opacity-100'
                      : isNext
                        ? 'z-10 scale-90 opacity-60 translate-x-20'
                        : 'z-5 scale-80 opacity-40 -translate-x-20'
                      }`}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : isNext ? 0.9 : 0.8,
                      opacity: isActive ? 1 : isNext ? 0.6 : 0.4,
                      x: isActive ? 0 : isNext ? 100 : -100,
                      z: isActive ? 20 : isNext ? 10 : 5
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    onClick={() => !isActive && goToTestimonial(index)}
                  >
                    <div className={`w-full h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${isActive ? 'shadow-2xl' : 'shadow-lg'
                      }`}>
                      <div className="w-full h-full relative">
                        {/* תמונת המכתב - תופסת כמעט את כל הסלייד */}
                        <motion.div
                          className="absolute inset-0"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: isActive ? 1 : 1.1 }}
                          transition={{ duration: 0.8 }}
                        >
                          {/* אפקט פולסינג מאחורי התמונה */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-full h-full rounded-full border-2 border-secondary-400/20"
                                animate={{
                                  scale: [1, 1.1, 1],
                                  opacity: [0.2, 0, 0.2]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: i * 0.8,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>

                          {/* תמונת המכתב */}
                          <motion.div
                            className="w-full h-full relative"
                            initial={{ rotateY: -5, rotateX: 2 }}
                            animate={{
                              rotateY: isActive ? 0 : -5,
                              rotateX: isActive ? 0 : 2
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            {testimonial.letterImage ? (
                              <img
                                src={testimonial.letterImage}
                                alt={`מכתב של ${testimonial.name}`}
                                className="w-full h-full object-cover rounded-3xl"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.parentElement?.querySelector('.letter-fallback') as HTMLElement;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                            ) : (
                              <div className="letter-fallback w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex flex-col items-center justify-center text-gray-600 p-8 text-center">
                                <Quote className="w-24 h-24 mb-6 text-secondary-400" />
                                <p className="text-2xl font-semibold mb-3">מכתב המלצה</p>
                                <p className="text-lg opacity-80">מכתב אישי מ-{testimonial.name}</p>
                              </div>
                            )}
                          </motion.div>
                        </motion.div>

                        {/* שכבת גרדיאנט כהה בחלק העליון */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/60 via-black/30 to-transparent rounded-t-3xl" />

                        {/* שכבת גרדיאנט כהה בחלק התחתון */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-b-3xl" />

                        {/* פרטי התלמיד - מופיעים על התמונה */}
                        <motion.div
                          className="absolute top-8 left-8 right-8 z-10"
                          initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: isActive ? 1 : 0.8, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        >
                          <div className="text-center">
                            {/* שם התלמיד - גדול ובולט */}
                            <motion.h2
                              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-2xl"
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                              style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)'
                              }}
                            >
                              {testimonial.name}
                            </motion.h2>

                            {/* כיתה - בולטת עם אפקט מיוחד */}
                            <motion.div
                              className="inline-block"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.7 }}
                            >
                              <motion.p
                                className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-300 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full inline-block drop-shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                                }}
                              >
                                {testimonial.grade}
                              </motion.p>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* אפקט זוהר סביב השם */}
                        <motion.div
                          className="absolute top-8 left-8 right-8 h-32 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isActive ? 0.3 : 0 }}
                          transition={{ duration: 1, delay: 0.8 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-secondary-400/20 via-transparent to-secondary-400/20 blur-xl" />
                        </motion.div>

                        {/* אפקט חלקיקים זוהרים */}
                        {isActive && (
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-secondary-400 rounded-full"
                                style={{
                                  left: `${20 + (i * 10)}%`,
                                  top: `${30 + (i * 5)}%`
                                }}
                                animate={{
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0],
                                  y: [0, -20, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.3,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* כפתורי ניווט */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* כפתור Play/Pause */}
            <motion.button
              onClick={togglePlayPause}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* נקודות ניווט */}
          <div className="flex justify-center mt-8 space-x-3 space-x-reverse">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-secondary-400'
                  : 'bg-white/50 hover:bg-white/75'
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* סטטיסטיקות */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">15+</div>
            <div className="text-sm opacity-80">שנות ניסיון</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">500+</div>
            <div className="text-sm opacity-80">תלמידים מצליחים</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">95%</div>
            <div className="text-sm opacity-80">שיפור ממוצע</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">100%</div>
            <div className="text-sm opacity-80">המלצות חיוביות</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 