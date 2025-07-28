export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} All Copyrights Reserved - Shayki Abramczyk. </p>
        </div>
      </div>
    </footer>
  )
}
