'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  User,
  Heart
} from 'lucide-react'

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

        {/* כרטיסים אחד ליד השני */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* הכרות אישית */}
          <motion.div
            className="card shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <User className="w-6 h-6 text-primary-500" />
              <h3 className="heading-tertiary">הכרות אישית</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                היי, שמי <span className="font-semibold text-math-blue">אבי פילוסוף</span>. נעים להכיר!
              </p>
              <p>
                אני מורה מנוסה למתמטיקה ובעל ניסיון רב בהגשה לבגרות במתמטיקה בכל הרמות.
              </p>
            </div>
          </motion.div>

          {/* תמונה במרכז */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-48 h-64 md:w-56 md:h-80 overflow-hidden shadow-lg">
              <Image
                src="/images/about-section/Avi.jpg"
                alt="אבי פילוסוף"
                width={224}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* הפילוסופיה שלי */}
          <motion.div
            className="card shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <Heart className="w-6 h-6 text-secondary-500" />
              <h3 className="heading-tertiary">הפילוסופיה שלי</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                לאורך השנים הובלתי להצלחה עשרות רבות של תלמידים מרוצים וקו זה של הצלחה מנחה אותי לאורך כל ימי כמורה.
              </p>
              <p>
                כמורה, התחביב העיקרי שלי הוא ניסיון התחקות אינסופי אחר הצליל המושלם – אותו צליל שנשמע כאשר האסימון נופל והתלמיד מבין את אשר לא הצליח להבין לפני כן.
              </p>
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
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-100 shadow-lg">
              {/* <div className="text-4xl mb-4">&quot;</div> */}
              <p className="text-xl md:text-2xl text-math-blue font-medium leading-relaxed mb-6">
                &quot;הדרך לגרום לתלמיד להבין יכולה להיות פתלתלה ומאתגרת ולכן תפקידו של המורה הוא לחפש ללא לאות את הדרך הזאת, לאתר אותה ולעבור בה בהצלחה.&quot;
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