'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Award, 
  Target, 
  Heart,
  CheckCircle,
  Star
} from 'lucide-react'

const education = [
  {
    degree: 'תואר ראשון במתמטיקה',
    institution: 'אוניברסיטת תל אביב',
    year: '2005-2009'
  },
  {
    degree: 'תעודת הוראה במתמטיקה',
    institution: 'מכללת לוינסקי',
    year: '2009-2010'
  },
  {
    degree: 'תואר שני בחינוך מתמטי',
    institution: 'אוניברסיטת בר אילן',
    year: '2012-2014'
  }
]

const experience = [
  'מורה פרטי למתמטיקה מעל 15 שנים',
  'מורה במערכת החינוך הפורמלית 8 שנים',
  'מפתח חומרי לימוד מתמטיים',
  'מרצה בקורסי הכנה לבגרות',
  'יועץ פדגוגי לבתי ספר'
]

const approach = [
  'גישה אישית מותאמת לכל תלמיד',
  'בניית ביטחון עצמי במתמטיקה',
  'שימוש בטכנולוגיות מתקדמות',
  'התמקדות בהבנה מעמיקה',
  'פיתוח חשיבה מתמטית'
]

export default function AboutSection() {
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
          <h2 className="heading-primary mb-4">מי אני?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מורה מנוסה ומקצועי עם תשוקה אמיתית להוראת מתמטיקה
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* תמונה ומידע אישי */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* תמונה */}
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-6xl font-bold text-white shadow-math-lg">
                אבי
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary-500 text-white p-3 rounded-full shadow-math">
                <Heart className="w-6 h-6" />
              </div>
            </div>

            {/* מידע אישי */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-math-blue">אבי פילוסוף</h3>
              <p className="text-lg text-gray-600">
                מורה פרטי למתמטיקה מנוסה עם מעל 15 שנות ניסיון בהוראה
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 space-x-reverse text-secondary-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">מומחה בהוראת מתמטיקה</span>
              </div>
            </div>
          </motion.div>

          {/* פרטים מקצועיים */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* השכלה */}
            <div className="card">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <GraduationCap className="w-6 h-6 text-primary-500" />
                <h3 className="heading-tertiary">השכלה</h3>
              </div>
              <div className="space-y-3">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{item.degree}</div>
                      <div className="text-sm text-gray-600">{item.institution} • {item.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ניסיון */}
            <div className="card">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <Award className="w-6 h-6 text-secondary-500" />
                <h3 className="heading-tertiary">ניסיון מקצועי</h3>
              </div>
              <div className="space-y-3">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* גישה פדגוגית */}
            <div className="card">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <Target className="w-6 h-6 text-math-green" />
                <h3 className="heading-tertiary">הגישה שלי</h3>
              </div>
              <div className="space-y-3">
                {approach.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ציטוט */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-100">
              <div className="text-4xl mb-4">&quot;</div>
              <p className="text-xl md:text-2xl text-math-blue font-medium leading-relaxed mb-6">
                המתמטיקה היא שפת הטבע, ואני כאן כדי לעזור לכל תלמיד להבין ולאהב אותה
              </p>
              <div className="text-lg text-gray-600">- אבי פילוסוף</div>
            </div>
          </div>
        </motion.div>

        {/* סטטיסטיקות */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">15+</div>
            <div className="text-sm text-gray-600">שנות ניסיון</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-500 mb-2">500+</div>
            <div className="text-sm text-gray-600">תלמידים</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-math-green mb-2">95%</div>
            <div className="text-sm text-gray-600">הצלחה</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-math-purple mb-2">100%</div>
            <div className="text-sm text-gray-600">מסירות</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 