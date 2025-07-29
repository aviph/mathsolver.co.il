'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home,
  Users, 
  User, 
  Star, 
  Youtube, 
  GraduationCap, 
  Phone,
  Menu,
  X
} from 'lucide-react'

const navItems = [
  { id: 'testimonials', label: 'מספרים עלי...', icon: Users, color: 'text-green-500' },
  { id: 'about', label: 'מי אני?', icon: User, color: 'text-cyan-500' },
  { id: 'advantages', label: 'היתרונות שלי', icon: Star, color: 'text-orange-500' },
  { id: 'youtube', label: 'ערוץ היוטיוב', icon: Youtube, color: 'text-red-500' },
  { id: 'students', label: 'אני והתלמידים', icon: GraduationCap, color: 'text-purple-500' },
  { id: 'contact', label: 'דברו איתי', icon: Phone, color: 'text-pink-500' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // זיהוי הסעיף הפעיל
      const scrollY = window.scrollY
      
      // בדיקה מיוחדת לסעיף הבית (התחלת הדף)
      if (scrollY < 200) {
        setActiveSection('home')
        return
      }
      
      // זיהוי הסעיפים האחרים
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Header קבוע */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-primary-800/95 backdrop-blur-custom shadow-math-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom px-4">
          <div className="flex items-center h-16 md:h-20">
            {/* לוגו */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => scrollToSection('home')}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="/images/header-home-logo.png" 
                alt="Mathsolver - מורה פרטי למתמטיקה" 
                className="h-12 md:h-16 w-auto"
              />
            </motion.div>

            {/* ניווט דסקטופ */}
            <nav className="hidden lg:flex items-center space-x-4 space-x-reverse mr-6 flex-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                const isContact = item.id === 'contact'
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 space-x-reverse px-8 py-2 rounded-lg transition-all duration-300 ${
                      isContact
                        ? 'bg-secondary-500 text-white hover:bg-secondary-600'
                        : isActive 
                          ? 'bg-primary-500 text-white shadow-math' 
                          : isScrolled
                            ? 'text-white hover:bg-primary-50 hover:text-primary-500'
                            : 'text-math-blue hover:bg-primary-50 hover:text-primary-500'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                )
              })}
            </nav>

            <div className="flex-1 flex justify-end">
              {/* כפתור המבורגר למובייל */}
                            <button
                className={`lg:hidden p-2 transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-white hover:text-primary-500' 
                    : 'text-math-blue hover:text-primary-500'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ניווט אנכי למובייל */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-16 md:top-20 left-0 right-0 bg-white/95 backdrop-blur-custom shadow-math-lg z-40 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container-custom px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  const isContact = item.id === 'contact'
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 space-x-reverse px-10 py-3 rounded-lg transition-all duration-300 ${
                        isContact
                          ? 'bg-secondary-500 text-white hover:bg-secondary-600'
                          : isActive 
                            ? 'bg-primary-500 text-white' 
                            : 'text-math-blue hover:bg-primary-50 hover:text-primary-500'
                      }`}
                      whileHover={{ x: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`w-5 h-5 ${isContact ? 'text-white' : item.color}`} />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  )
                })}
                

              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ניווט אנכי לדסקטופ */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col space-y-3">
          {/* כפתור בית */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className={`group relative p-3 rounded-full transition-all duration-300 ${
              activeSection === 'home'
                ? 'bg-primary-500 text-white shadow-math-lg' 
                : 'bg-white/90 text-math-blue hover:bg-primary-500 hover:text-white shadow-math'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0 }}
          >
            <Home className="w-5 h-5 text-blue-500" />
            
            {/* טולטיפ */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-math-blue text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              בית
            </div>
          </motion.button>

          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative p-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary-500 text-white shadow-math-lg' 
                    : 'bg-white/90 text-math-blue hover:bg-primary-500 hover:text-white shadow-math'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
              >
                <Icon className="w-5 h-5" />
                
                {/* טולטיפ */}
                <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-math-blue text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </>
  )
} 