'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-indigo-100" />
      <div className="absolute inset-0 bg-white/60" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">About Me</h2>
        <div className="space-y-6 text-lg text-gray-600">
          <p>
            I'm a passionate DevOps Engineer with expertise in automating, optimizing, and maintaining modern cloud infrastructure and deployment pipelines.
          </p>
          <p>
            My focus is on implementing DevOps best practices, CI/CD pipelines, and cloud-native solutions to help teams deliver software more efficiently and reliably.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Docker', 'Kubernetes', 'Helm','AWS', 'Azure DevOps', 'Terraform',
                'Python', 'GitHub Actions', 'Linux', 'Python', 'Bash',
                'CI/CD', 'Infrastructure as Code', 'Git'
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm hover:bg-sky-200 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
