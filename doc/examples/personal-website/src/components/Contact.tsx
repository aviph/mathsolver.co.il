'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shayki-abramczyk/',
      icon: FaLinkedin,
      color: 'hover:text-linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/ShaykiAbramczyk',
      icon: FaTwitter,
      color: 'hover:text-twitter'
    }
  ]

  return (
    <section className="py-20 relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-indigo-100" />
      <div className="absolute inset-0 bg-white/60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">Connect with me on social media</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
            <div className="flex justify-center items-center space-x-8">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`p-4 rounded-full bg-gray-50 transition-colors duration-300 ${link.color} group-hover:bg-gray-100`}>
                      <Icon className="w-8 h-8 text-gray-600 group-hover:text-current" />
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      {link.name}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
