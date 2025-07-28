'use client'

import { motion } from 'framer-motion'

const profiles = [
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    url: 'https://www.linkedin.com/in/shaykiabramczyk/',
    color: 'bg-[#0077B5]',
    hoverColor: 'hover:bg-[#006396]'
  },
  {
    name: 'GitHub',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    url: 'https://github.com/shaykiabramczyk',
    color: 'bg-gray-900',
    hoverColor: 'hover:bg-gray-800'
  },
  {
    name: 'Stack Overflow',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
      </svg>
    ),
    url: 'https://stackoverflow.com/users/7882470/shayki-abramczyk',
    color: 'bg-[#F48024]',
    hoverColor: 'hover:bg-[#DA6C0A]'
  }
]

export default function Projects() {
  return (
    <section className="py-20 relative" id="projects">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-indigo-100" />
      <div className="absolute inset-0 bg-white/60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Profiles</h2>
          <p className="text-xl text-gray-600">Connect with me and explore my work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${profile.color} ${profile.hoverColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 text-white`}
            >
              {profile.icon}
              <div>
                <h3 className="text-xl font-bold">{profile.name}</h3>
                <p className="text-sm opacity-90">View Profile</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
