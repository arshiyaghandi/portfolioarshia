import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0c0c]/90 backdrop-blur-lg border-b border-neutral-800/50 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-bold text-lg text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AG
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.2 }}
              whileHover={{ y: -2 }}
              className="px-4 py-2 text-sm text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c0c0c]/95 backdrop-blur-lg border-b border-neutral-800 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
