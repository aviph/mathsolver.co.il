'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ExternalLink, Eye, ThumbsUp, Filter } from 'lucide-react'

// שמות הפותרים
const solvers = [
  {
    id: 'אבי פילוסוף',
  },
  {
    id: 'עובד לב ארי',
  },
  {
    id: 'אילון פרץ',
  },
]

// נושאי לימוד  
const subjects = [
  {
    id: 'פתרון בגרות',
    name: 'פתרון בגרות',
  },
  {
    id: 'אלגברה אנליטית',
    name: 'אלגברה אנליטית',
  },
  {
    id: 'בעיות קנייה ומכירה',
    name: 'בעיות קנייה ומכירה',
  },
]

// שנות בגרות
const years = [
  {
    id: '2023',
  },
  {
    id: '2024',
  },
]

// שאלון בגרות
const questionnaires = [
  {
    id: '35182 (801)',
  },
  {
    id: '35481 (804)',
  },
  {
    id: '35572'
  },
]

// סרטונים 
const videos = [
  // אבי פילוסוף
  {
    id: 'avi1',
    title: 'פתרון בגרות מתמטיקה חורף 2023 35182 (801): שאלה 1 (בעיית קנייה ומכירה)',
    subject: 'בעיות קנייה ומכירה',
    solver: 'אבי פילוסוף',
    youtubeId: '3nbhAK1yfyU',
    youtubeUrl: 'https://www.youtube.com/watch?v=3nbhAK1yfyU&list=PLetxzNJbOnEVIrEPnAdhWcLKzi3zzXg89',
    year: '2023',
    questionnaire: '35182 (801)',
  },

  {
    id: 'avi2',
    title: 'פתרון בגרות מתמטיקה 35481 (804) חורף 2023: שאלה 2 (משוואת מעגל)',
    subject: 'אלגברה אנליטית',
    solver: 'אבי פילוסוף',
    youtubeId: 'CoGkwf-z5E8',
    youtubeUrl: 'https://www.youtube.com/watch?v=CoGkwf-z5E8',
    year: '2023',
    questionnaire: '35481 (804)',
  },

  // אילון פרץ
  {
    id: 'eilon1',
    title: 'פתרון בגרות במתמטיקה 572 קיץ 2024 ב׳ #בגרותבמתמטיקה #בגרות',
    subject: 'פתרון בגרות',
    solver: 'אילון פרץ',
    youtubeId: 'uo8Ym9ItLUY', 
    youtubeUrl: 'https://www.youtube.com/watch?v=uo8Ym9ItLUY&list=PLVnhb7g4G12FMOwTviyitClMl2bR7EnUS&index=1',
    year: '2024',
    questionnaire: '35572',
  },
]


export default function YouTubeSection() {
  const [selectedSolver, setSelectedSolver] = useState<string>('כל הפותרים')
  const [selectedSubject, setSelectedSubject] = useState<string>('כל הנושאים')
  const [selectedYear, setSelectedYear] = useState<string>('כל השנים')
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState<string>('כל השאלונים')

  // פונקציה לסינון הסרטונים
  const filteredVideos = videos.filter(video => {
    const solverMatch = selectedSolver === 'כל הפותרים' || video.solver === selectedSolver
    const subjectMatch = selectedSubject === 'כל הנושאים' || video.subject === selectedSubject
    const yearMatch = selectedYear === 'כל השנים' || video.year === selectedYear
    const questionnaireMatch = selectedQuestionnaire === 'כל השאלונים' || video.questionnaire === selectedQuestionnaire

    return solverMatch && subjectMatch && yearMatch && questionnaireMatch
  })

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
          <h2 className="heading-primary mb-4">
            ערוץ היוטיוב שלי... ושל עוד פותרים
          </h2>

          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            סרטונים חינוכיים במתמטיקה לכל הרמות - צפו ולמדו בחינם!
          </p> */}

        </motion.div>

        {/* סטטיסטיקות הערוץ */}
        {/* <motion.div
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
        </motion.div> */}

        {/* מערכת סינון */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-math border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Filter className="w-6 h-6 text-math-blue mr-2" />
              <h3 className="heading-secondary">סינון סרטונים</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* סינון לפי פותר */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">פותר השאלה</label>
                <select
                  value={selectedSolver}
                  onChange={(e) => setSelectedSolver(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-math-blue focus:border-transparent"
                >
                  <option value="כל הפותרים">כל הפותרים</option>
                  {solvers.map((solver) => (
                    <option key={solver.id} value={solver.id}>{solver.id}</option>
                  ))}
                </select>
              </div>

              {/* סינון לפי נושא */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">נושא לימוד</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-math-blue focus:border-transparent"
                >
                  <option value="כל הנושאים">כל הנושאים</option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.name}>{subject.name}</option>
                  ))}
                </select>
              </div>

              {/* סינון לפי שנה */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">שנה</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-math-blue focus:border-transparent"
                >
                  <option value="כל השנים">כל השנים</option>
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>{year.id}</option>
                  ))}
                </select>
              </div>

              {/* סינון לפי שאלון */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">שאלון בגרות</label>
                <select
                  value={selectedQuestionnaire}
                  onChange={(e) => setSelectedQuestionnaire(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-math-blue focus:border-transparent"
                >
                  <option value="כל השאלונים">כל השאלונים</option>
                  {questionnaires.map((questionnaire) => (
                    <option key={questionnaire.id} value={questionnaire.id}>{questionnaire.id}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* הצגת תוצאות הסינון */}
            <div className="mt-6 text-center">
              <div className="text-sm text-gray-600">
                מציג {filteredVideos.length} מתוך {videos.length} סרטונים
              </div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.length === 0 ? (
              <motion.div
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h4 className="text-xl font-medium text-gray-600 mb-2">לא נמצאו סרטונים</h4>
                <p className="text-gray-500">נסה לשנות את קריטריוני הסינון</p>
              </motion.div>
            ) : (
              filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="card-hover bg-white rounded-xl overflow-hidden shadow-math hover:shadow-math-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* תמונת הסרטון או YouTube Embed */}
                  {video.youtubeId ? (
                    <div className="relative h-48">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?start=27`}
                        title={video.title}
                        className="w-full h-full rounded-t-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      {/* כפתור לפתיחה ב-YouTube */}
                      <div className="absolute top-2 right-2">
                        <motion.button
                          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.open(video.youtubeUrl, '_blank')}
                          title="פתח ב-YouTube"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  ) : (
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
                        {video.questionnaire}
                      </div>
                    </div>
                  )}

                  {/* תוכן הסרטון */}
                  <div className="p-4">
                    <h4 className="font-bold text-math-blue mb-2 line-clamp-2">{video.title}</h4>

                    {/* פרטי הסרטון */}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">{video.subject}</span>
                      <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded">{video.solver}</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded">{video.year}</span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">{video.questionnaire}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
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
              onClick={() => window.open('https://www.youtube.com/@click808', '_blank')}
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