import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
