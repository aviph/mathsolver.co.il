'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '0528284808'
    const message = 'שלום! אני מעוניין/ת בשיעורים פרטיים במתמטיקה'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 2,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      {/* כפתור עגול עם אייקון */}
      <motion.button
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 transition-all duration-300 relative"
        style={{
          width: 'clamp(50px, 6vw, 60px)',
          height: 'clamp(50px, 6vw, 60px)',
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        onClick={handleWhatsAppClick}
      >
        {/* אנימציית pulse רקע */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full opacity-75"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.75, 0, 0.75],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* אייקון WhatsApp */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <MessageCircle 
            className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" 
          />
        </div>

        {/* אפקט ripple בלחיצה */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full opacity-30"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{
            scale: 2,
            opacity: 0,
            transition: { duration: 0.3 }
          }}
        />
      </motion.button>

      {/* בר טקסט */}
      <motion.button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-r-full transition-all duration-300 flex items-center space-x-2 space-x-reverse"
        style={{
          minWidth: 'clamp(200px, 25vw, 280px)',
        }}
        whileTap={{ 
          scale: 0.98,
          transition: { duration: 0.1 }
        }}
        onClick={handleWhatsAppClick}
      >
        <span className="text-sm md:text-base font-medium whitespace-nowrap">
          לקביעת שיעור מתמטיקה 052-8284808
        </span>
      </motion.button>

      {/* badge אדום */}
      <motion.div
        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: "spring" }}
      >
        1
      </motion.div>
    </motion.div>
  )
} 