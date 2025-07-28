'use client'

import { motion } from 'framer-motion'
import { Play, ExternalLink, Eye, ThumbsUp } from 'lucide-react'

const videos = [
  {
    id: 'video1',
    title: 'איך לפתור משוואות ריבועיות',
    description: 'מדריך מקיף לפתרון משוואות ריבועיות עם דוגמאות מעשיות',
    thumbnail: '/images/youtube-1.jpg',
    duration: '15:30',
    views: '2.5K',
    likes: '180',
    subject: 'אלגברה',
    grade: 'כיתה ט-י'
  },
  {
    id: 'video2',
    title: 'גיאומטריה אנליטית - יסודות',
    description: 'הסבר מפורט על יסודות הגיאומטריה האנליטית',
    thumbnail: '/images/youtube-2.jpg',
    duration: '22:45',
    views: '1.8K',
    likes: '145',
    subject: 'גיאומטריה',
    grade: 'כיתה י-יא'
  },
  {
    id: 'video3',
    title: 'טריגונומטריה - פונקציות טריגונומטריות',
    description: 'הכרת הפונקציות הטריגונומטריות הבסיסיות',
    thumbnail: '/images/youtube-3.jpg',
    duration: '18:20',
    views: '3.2K',
    likes: '220',
    subject: 'טריגונומטריה',
    grade: 'כיתה י-יא'
  },
  {
    id: 'video4',
    title: 'חשבון דיפרנציאלי - נגזרות',
    description: 'מבוא לנגזרות עם דוגמאות מעשיות',
    thumbnail: '/images/youtube-4.jpg',
    duration: '25:10',
    views: '1.5K',
    likes: '120',
    subject: 'חשבון דיפרנציאלי',
    grade: 'כיתה יא-יב'
  },
  {
    id: 'video5',
    title: 'הסתברות - יסודות',
    description: 'הסבר על יסודות ההסתברות עם דוגמאות',
    thumbnail: '/images/youtube-5.jpg',
    duration: '19:35',
    views: '2.1K',
    likes: '165',
    subject: 'הסתברות',
    grade: 'כיתה י-יא'
  },
  {
    id: 'video6',
    title: 'אינטגרלים - מבוא',
    description: 'מבוא לאינטגרלים עם דוגמאות בסיסיות',
    thumbnail: '/images/youtube-6.jpg',
    duration: '21:15',
    views: '1.2K',
    likes: '95',
    subject: 'חשבון אינטגרלי',
    grade: 'כיתה יב'
  }
]

const subjects = [
  { name: 'כל הנושאים', count: '50+' },
  { name: 'אלגברה', count: '15' },
  { name: 'גיאומטריה', count: '12' },
  { name: 'טריגונומטריה', count: '8' },
  { name: 'חשבון דיפרנציאלי', count: '10' },
  { name: 'הסתברות', count: '5' }
]

export default function YouTubeSection() {
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
          <h2 className="heading-primary mb-4">ערוץ היוטיוב שלי</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            סרטונים חינוכיים במתמטיקה לכל הרמות - צפו ולמדו בחינם!
          </p>
        </motion.div>

        {/* סטטיסטיקות הערוץ */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">50+</div>
            <div className="text-sm text-gray-600">סרטונים</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">15K+</div>
            <div className="text-sm text-gray-600">צפיות</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">1.2K+</div>
            <div className="text-sm text-gray-600">מנויים</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">4.8</div>
            <div className="text-sm text-gray-600">דירוג ממוצע</div>
          </div>
        </motion.div>

        {/* נושאי לימוד */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-secondary text-center mb-6">נושאי לימוד</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                className="card text-center hover:shadow-math-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-lg font-medium text-math-blue mb-1">{subject.name}</div>
                <div className="text-sm text-gray-600">{subject.count} סרטונים</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* סרטונים נבחרים */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-secondary text-center mb-8">סרטונים נבחרים</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="card-hover bg-white rounded-xl overflow-hidden shadow-math hover:shadow-math-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* תמונת הסרטון */}
                <div className="relative h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📺</div>
                    <div className="text-sm opacity-80">{video.title}</div>
                  </div>
                  
                  {/* כפתור play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                  
                  {/* משך הסרטון */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* תוכן הסרטון */}
                <div className="p-4">
                  <h4 className="font-bold text-math-blue mb-2 line-clamp-2">{video.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                  
                  {/* פרטי הסרטון */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">{video.subject}</span>
                    <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded">{video.grade}</span>
                  </div>
                  
                  {/* סטטיסטיקות */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA לערוץ */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 md:p-12 border border-red-200">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">רוצים לראות עוד?</h3>
            <p className="text-lg text-gray-700 mb-6">
              היכנסו לערוץ היוטיוב שלי וצפו בסרטונים חינוכיים נוספים במתמטיקה
            </p>
            <motion.button
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 space-x-reverse mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.youtube.com/@mathsolver', '_blank')}
            >
              <ExternalLink className="w-5 h-5" />
              <span>צפו בערוץ המלא</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 