'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const DevOpsIcons = () => {
  const icons = [
    { text: '$ docker run', x: '10%', y: '20%', delay: 0 },
    { text: '$ kubectl apply', x: '80%', y: '15%', delay: 0.2 },
    { text: '$ terraform plan', x: '20%', y: '70%', delay: 0.4 },
    { text: '$ git push', x: '70%', y: '60%', delay: 0.6 },
    { text: '$ aws configure', x: '15%', y: '40%', delay: 0.8 },
    { text: '$ helm upgrade ', x: '75%', y: '35%', delay: 1 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-sky-600/30 font-mono text-xl whitespace-nowrap"
          style={{ left: icon.x, top: icon.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: icon.delay, duration: 0.5 }}
        >
          {icon.text}
        </motion.div>
      ))}
    </div>
  )
}

const FloatingLogos = () => {
  const logos = [
    { text: '⚡', x: '25%', y: '25%', delay: 0.3 },
    { text: '🐳', x: '65%', y: '20%', delay: 0.5 },
    { text: '☸️', x: '30%', y: '65%', delay: 0.7 },
    { text: '🚀', x: '70%', y: '70%', delay: 0.9 },
    { text: '⚙️', x: '45%', y: '40%', delay: 1.1 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{ left: logo.x, top: logo.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.3, 1, 0.3], 
            y: [0, -20, 0],
          }}
          transition={{ 
            delay: logo.delay,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {logo.text}
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      {/* Background with DevOps elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-indigo-100" />
      <div className="absolute inset-0 bg-white/60" />
      <DevOpsIcons />
      <FloatingLogos />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto"
          >
            <div className="w-32 h-32 rounded-full border-4 border-sky-300 overflow-hidden mx-auto mb-8 relative">
              <Image 
                src="https://i.ibb.co/b1H4phg/26063853.jpg"
                alt="Shayki Abramczyk"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400"
            >
              Shayki Abramczyk
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 font-semibold"
            >
              DevOps Engineer
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto"
          >
            Automating, optimizing, and scaling cloud infrastructure.
            <br />
            Building robust CI/CD pipelines and streamlining development workflows.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-sky-400 hover:bg-sky-500 text-white font-bold rounded-full transition-colors duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-indigo-400 hover:bg-indigo-500 text-white font-bold rounded-full transition-colors duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12"
          >
            <h3 className="text-gray-600 text-sm uppercase tracking-wider mb-4">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'AWS', 'Azure DevOps', 'Docker', 'Kubernetes', 
                'Terraform', 'Python', 'GitHub Actions', 'Linux'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/50 rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-gray-600">
          <span className="text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-2"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
