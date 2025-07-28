'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  Users, 
  Target, 
  BookOpen, 
  Home, 
  Smartphone,
  Award,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Star
} from 'lucide-react'

const advantages = [
  {
    icon: Clock,
    title: 'ניסיון רב שנים',
    description: 'מעל 15 שנות ניסיון בהוראת מתמטיקה עם תוצאות מוכחות',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Users,
    title: 'גישה אישית',
    description: 'כל תלמיד מקבל תכנית לימודים מותאמת אישית לצרכיו',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: Target,
    title: 'תוצאות מוכחות',
    description: '95% מהתלמידים משפרים את הציונים שלהם משמעותית',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: BookOpen,
    title: 'חומרי לימוד מתקדמים',
    description: 'שימוש בטכנולוגיות מתקדמות וחומרי לימוד עדכניים',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    icon: Home,
    title: 'לימוד בבית',
    description: 'השיעורים מתקיימים בבית התלמיד בסביבה נוחה ומוכרת',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    icon: Smartphone,
    title: 'תמיכה 24/7',
    description: 'זמינות גבוהה לתמיכה ועזרה גם מחוץ לשעות השיעור',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    icon: Award,
    title: 'מוניטין מעולה',
    description: 'המלצות חמות מתלמידים והורים מרוצים',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    icon: Zap,
    title: 'שיפור מהיר',
    description: 'תוצאות נראות כבר אחרי מספר שיעורים',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200'
  }
]

const features = [
  'ליווי צמוד לאורך כל השנה',
  'הכנה לבגרות מקצועית',
  'טיפול בקשיים ספציפיים',
  'בניית ביטחון עצמי',
  'פיתוח חשיבה מתמטית',
  'התאמה לכל רמה'
]

export default function AdvantagesSection() {
  return (
    <div className="section text-white relative overflow-hidden">
      {/* רקע מתמטי */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl font-math animate-float">∞</div>
        <div className="absolute top-20 right-20 text-5xl font-math animate-float" style={{ animationDelay: '1s' }}>∫</div>
        <div className="absolute bottom-20 left-20 text-4xl font-math animate-float" style={{ animationDelay: '2s' }}>∑</div>
        <div className="absolute bottom-10 right-10 text-7xl font-math animate-pulse-slow">π</div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-primary text-white mb-4">היתרונות שלי</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            למה לבחור בי כמורה פרטי למתמטיקה?
          </p>
        </motion.div>

        {/* כרטיסיות היתרונות */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            
            return (
              <motion.div
                key={index}
                className={`card-hover bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${advantage.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${advantage.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{advantage.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{advantage.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* תכונות נוספות */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">מה כלול בשיעורים?</h3>
            <p className="text-lg opacity-90">השירות המלא שאני מציע לכל תלמיד</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 space-x-reverse"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-secondary-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">מוכנים להתחיל?</h3>
            <p className="text-lg opacity-90 mb-6">
              צרו קשר עכשיו ותתחילו את המסע להצלחה במתמטיקה
            </p>
            <motion.button
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              התקשרו עכשיו - 052-8284808
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// קומפוננטה עזר
function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
} 