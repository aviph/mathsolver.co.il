'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'דנה כהן',
    grade: 'כיתה יב',
    score: '95%',
    text: 'אבי עזר לי להבין מתמטיקה כמו שלא הבנתי מעולם. הציון שלי עלה מ-60 ל-95!',
    image: '/images/testimonial-1.jpg',
    subject: 'חשבון דיפרנציאלי ואינטגרלי'
  },
  {
    id: 2,
    name: 'יוסי לוי',
    grade: 'כיתה י',
    score: '88%',
    text: 'הגישה האישית של אבי עשתה את כל ההבדל. עכשיו אני אוהב מתמטיקה!',
    image: '/images/testimonial-2.jpg',
    subject: 'גיאומטריה אנליטית'
  },
  {
    id: 3,
    name: 'מיכל רוזן',
    grade: 'כיתה ח',
    score: '92%',
    text: 'אבי הסביר לי הכל בצורה פשוטה וברורה. הציונים שלי השתפרו משמעותית.',
    image: '/images/testimonial-3.jpg',
    subject: 'אלגברה'
  },
  {
    id: 4,
    name: 'דוד שמואלי',
    grade: 'כיתה יא',
    score: '89%',
    text: 'השיעורים עם אבי היו מהנים ומעשירים. הצלחתי בבגרות במתמטיקה!',
    image: '/images/testimonial-4.jpg',
    subject: 'טריגונומטריה'
  },
  {
    id: 5,
    name: 'שרה גולדברג',
    grade: 'כיתה ט',
    score: '94%',
    text: 'אבי נתן לי ביטחון במתמטיקה. עכשיו אני מרגישה חזקה בנושא!',
    image: '/images/testimonial-5.jpg',
    subject: 'משוואות ריבועיות'
  },
  {
    id: 6,
    name: 'עמית כהן',
    grade: 'כיתה יב',
    score: '91%',
    text: 'הגישה המקצועית והסבלנות של אבי עזרו לי להצליח בבגרות.',
    image: '/images/testimonial-6.jpg',
    subject: 'הסתברות'
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
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
          className="text-center mb-12"
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

        <div className="relative max-w-4xl mx-auto">
          {/* סליידר המלצות */}
          <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-math-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  {/* ציטוט */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Quote className="w-12 h-12 text-secondary-300 mx-auto mb-4" />
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </motion.div>

                  {/* פרטי התלמיד */}
                  <motion.div
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 md:space-x-reverse"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* תמונת התלמיד */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-2xl font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>

                    {/* פרטים */}
                    <div className="text-center md:text-right">
                      <h3 className="text-xl font-bold mb-1">{testimonials[currentIndex].name}</h3>
                      <p className="text-secondary-300 mb-2">{testimonials[currentIndex].grade}</p>
                      <p className="text-sm opacity-80">{testimonials[currentIndex].subject}</p>
                    </div>

                    {/* ציון */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary-400 mb-1">
                        {testimonials[currentIndex].score}
                      </div>
                      <div className="flex justify-center space-x-1 space-x-reverse">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* כפתורי ניווט */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* נקודות ניווט */}
          <div className="flex justify-center mt-8 space-x-3 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-secondary-400' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* סטטיסטיקות */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
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
    </div>
  )
} 