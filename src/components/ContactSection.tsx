'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle
} from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  phone: z.string().min(9, 'מספר טלפון חייב להיות תקין'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  subject: z.string().min(3, 'נושא חייב להכיל לפחות 3 תווים'),
  message: z.string().min(10, 'הודעה חייב להכיל לפחות 10 תווים'),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Phone,
    title: 'טלפון',
    value: '052-8284808',
    link: 'tel:052-8284808',
    color: 'text-green-500'
  },
  {
    icon: Mail,
    title: 'אימייל',
    value: 'avi@mathsolver.co.il',
    link: 'mailto:avi@mathsolver.co.il',
    color: 'text-blue-500'
  },
  {
    icon: MapPin,
    title: 'אזור פעילות',
    value: 'נתניה ומושבי השרון',
    link: null,
    color: 'text-purple-500'
  },
  {
    icon: Clock,
    title: 'שעות פעילות',
    value: 'א\' - ה\' 08:00-22:00',
    link: null,
    color: 'text-orange-500'
  }
]

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: '📱',
    link: 'https://wa.me/972528284808',
    color: 'bg-green-500'
  },
  {
    name: 'Facebook',
    icon: '📘',
    link: 'https://facebook.com/mathsolver',
    color: 'bg-blue-500'
  },
  {
    name: 'Instagram',
    icon: '📷',
    link: 'https://instagram.com/mathsolver',
    color: 'bg-pink-500'
  },
  {
    name: 'YouTube',
    icon: '📺',
    link: 'https://youtube.com/@mathsolver',
    color: 'bg-red-500'
  }
]

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async () => {
    setIsSubmitting(true)
    
    // סימולציה של שליחת הטופס
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // איפוס ההודעה אחרי 5 שניות
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="section">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-primary mb-4">דברו איתי</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מוכנים להתחיל את המסע להצלחה במתמטיקה? צרו קשר עכשיו!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* פרטי התקשרות */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="heading-secondary mb-6">פרטי התקשרות</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 space-x-reverse"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${info.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium text-math-blue">{info.title}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-600">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* רשתות חברתיות */}
            <div>
              <h3 className="heading-secondary mb-6">עקבו אחריי</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 rounded-xl text-center hover:scale-105 transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <div className="font-medium">{social.name}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* מפת האזור */}
            <div>
              <h3 className="heading-secondary mb-6">אזור פעילות</h3>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h4 className="font-bold text-math-blue mb-2">נתניה ומושבי השרון</h4>
                  <p className="text-gray-600 mb-4">
                    אני מגיע לבית התלמיד באזור נתניה וכל מושבי השרון
                  </p>
                  <div className="text-sm text-gray-500">
                    כולל: נתניה, כפר יונה, בית ינאי, קדימה, צורן ועוד
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* טופס יצירת קשר */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="heading-secondary mb-6">שלחו לי הודעה</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">שם מלא *</label>
                    <input
                      type="text"
                      {...register('name')}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="הכנס את שמך המלא"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">טלפון *</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="052-1234567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="form-label">אימייל *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">נושא *</label>
                  <select
                    {...register('subject')}
                    className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                  >
                    <option value="">בחר נושא</option>
                    <option value="שיעור פרטי">שיעור פרטי</option>
                    <option value="הכנה לבגרות">הכנה לבגרות</option>
                    <option value="ליווי שנתי">ליווי שנתי</option>
                    <option value="קורס קיץ">קורס קיץ</option>
                    <option value="שאלה כללית">שאלה כללית</option>
                    <option value="אחר">אחר</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">הודעה *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="ספרו לי על התלמיד/ה ומה אתם מחפשים..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2 space-x-reverse"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>שולח...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>שלח הודעה</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* הודעת הצלחה */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 space-x-reverse"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium text-green-800">ההודעה נשלחה בהצלחה!</div>
                      <div className="text-sm text-green-600">אני אחזור אליכם בהקדם האפשרי</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* CTA נוסף */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-math-blue mb-4">מוכנים להתחיל?</h3>
            <p className="text-lg text-gray-700 mb-6">
              אל תחכו - התקשרו עכשיו ותתחילו את המסע להצלחה במתמטיקה
            </p>
            <motion.a
              href="tel:052-8284808"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 space-x-reverse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>התקשרו עכשיו - 052-8284808</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 