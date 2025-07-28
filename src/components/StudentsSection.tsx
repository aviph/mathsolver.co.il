'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  Star, 
  Award
} from 'lucide-react'

const students = [
  {
    id: 1,
    name: 'דנה כהן',
    grade: 'כיתה יב',
    subject: 'חשבון דיפרנציאלי',
    improvement: '60% → 95%',
    story: 'דנה הגיעה אליי עם ציון 60 במתמטיקה. אחרי שנה של לימוד משותף, היא סיימה עם ציון 95 בבגרות!',
    image: '/images/student-1.jpg',
    category: 'תיכון'
  },
  {
    id: 2,
    name: 'יוסי לוי',
    grade: 'כיתה י',
    subject: 'גיאומטריה אנליטית',
    improvement: '70% → 88%',
    story: 'יוסי התקשה בגיאומטריה. עם הגישה האישית והסבלנות, הוא הצליח להבין ולאהב את הנושא.',
    image: '/images/student-2.jpg',
    category: 'תיכון'
  },
  {
    id: 3,
    name: 'מיכל רוזן',
    grade: 'כיתה ח',
    subject: 'אלגברה',
    improvement: '65% → 92%',
    story: 'מיכל הייתה חסרת ביטחון במתמטיקה. היום היא מרגישה חזקה ומצליחה בכל המבחנים.',
    image: '/images/student-3.jpg',
    category: 'חטיבה'
  },
  {
    id: 4,
    name: 'דוד שמואלי',
    grade: 'כיתה יא',
    subject: 'טריגונומטריה',
    improvement: '55% → 89%',
    story: 'דוד התקשה בטריגונומטריה. עם הסברים ברורים ודוגמאות מעשיות, הוא הצליח בבגרות.',
    image: '/images/student-4.jpg',
    category: 'תיכון'
  },
  {
    id: 5,
    name: 'שרה גולדברג',
    grade: 'כיתה ט',
    subject: 'משוואות ריבועיות',
    improvement: '75% → 94%',
    story: 'שרה הייתה טובה במתמטיקה אבל התקשתה במשוואות ריבועיות. היום היא מומחית בנושא!',
    image: '/images/student-5.jpg',
    category: 'חטיבה'
  },
  {
    id: 6,
    name: 'עמית כהן',
    grade: 'כיתה יב',
    subject: 'הסתברות',
    improvement: '68% → 91%',
    story: 'עמית חשש מהסתברות. עם הגישה המעשית והדוגמאות מהחיים, הוא הצליח להבין ולאהב את הנושא.',
    image: '/images/student-6.jpg',
    category: 'תיכון'
  },
  {
    id: 7,
    name: 'נועה לוי',
    grade: 'כיתה ו',
    subject: 'שברים',
    improvement: '70% → 96%',
    story: 'נועה התקשתה בשברים. עם משחקים וחומרים ויזואליים, היא הפכה למומחית בשברים!',
    image: '/images/student-7.jpg',
    category: 'יסודי'
  },
  {
    id: 8,
    name: 'תומר רוזן',
    grade: 'כיתה ז',
    subject: 'משוואות',
    improvement: '62% → 89%',
    story: 'תומר לא הבין משוואות. עם הסברים פשוטים ושלב אחר שלב, הוא הצליח להבין ולפתור כל משוואה.',
    image: '/images/student-8.jpg',
    category: 'חטיבה'
  }
]

const categories = [
  { id: 'all', name: 'כל הגילאים', icon: Users },
  { id: 'יסודי', name: 'יסודי', icon: GraduationCap },
  { id: 'חטיבה', name: 'חטיבת ביניים', icon: Award },
  { id: 'תיכון', name: 'תיכון', icon: Star }
]

export default function StudentsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null)

  const filteredStudents = selectedCategory === 'all' 
    ? students 
    : students.filter(student => student.category === selectedCategory)

  return (
    <div className="section text-white relative overflow-hidden">
      {/* רקע מתמטי */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl font-math animate-float">∑</div>
        <div className="absolute top-20 right-20 text-5xl font-math animate-float" style={{ animationDelay: '1s' }}>∫</div>
        <div className="absolute bottom-20 left-20 text-4xl font-math animate-float" style={{ animationDelay: '2s' }}>π</div>
        <div className="absolute bottom-10 right-10 text-7xl font-math animate-pulse-slow">∞</div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-primary text-white mb-4">אני והתלמידים</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            סיפורי הצלחה אמיתיים של תלמידים שהצליחו עם השיטה שלי
          </p>
        </motion.div>

        {/* פילטרים */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.id
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-secondary-400 text-white shadow-math' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* גלריית תלמידים */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredStudents.map((student, index) => (
              <motion.div
                key={student.id}
                className="card-hover bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                onClick={() => setSelectedStudent(student)}
              >
                {/* תמונת התלמיד */}
                <div className="h-48 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">👨‍🎓</div>
                    <div className="text-sm opacity-80">{student.name}</div>
                  </div>
                </div>

                {/* פרטי התלמיד */}
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{student.name}</h3>
                  <p className="text-sm text-secondary-300 mb-2">{student.grade}</p>
                  <p className="text-xs opacity-80 mb-3">{student.subject}</p>
                  
                  {/* שיפור הציון */}
                  <div className="bg-secondary-400/20 rounded-lg p-2 text-center">
                    <div className="text-sm font-bold text-secondary-300">{student.improvement}</div>
                    <div className="text-xs opacity-80">שיפור ציון</div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* מודל פרטי התלמיד */}
        <AnimatePresence>
          {selectedStudent && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudent(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* כותרת */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-math-blue">{selectedStudent.name}</h3>
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* תמונת התלמיד */}
                  <div className="h-64 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">👨‍🎓</div>
                      <div className="text-xl font-bold">{selectedStudent.name}</div>
                    </div>
                  </div>

                  {/* פרטים */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">כיתה</div>
                      <div className="font-bold text-math-blue">{selectedStudent.grade}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">נושא</div>
                      <div className="font-bold text-math-blue">{selectedStudent.subject}</div>
                    </div>
                  </div>

                  {/* שיפור הציון */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 mb-6 border border-green-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">{selectedStudent.improvement}</div>
                      <div className="text-sm text-green-700">שיפור ציון</div>
                    </div>
                  </div>

                  {/* סיפור ההצלחה */}
                  <div>
                    <h4 className="font-bold text-math-blue mb-3">סיפור ההצלחה</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedStudent.story}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* סטטיסטיקות */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">500+</div>
            <div className="text-sm opacity-80">תלמידים מצליחים</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">95%</div>
            <div className="text-sm opacity-80">שיפור ממוצע</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">15+</div>
            <div className="text-sm opacity-80">שנות ניסיון</div>
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

// קומפוננטה עזר
function X({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
} 