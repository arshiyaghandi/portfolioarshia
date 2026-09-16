import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer({ data }) {
  if (!data) return null

  const links = [
    { icon: FiMail, label: data.email, href: `mailto:${data.email}` },
    { icon: FiPhone, label: data.phone, href: `tel:${data.phone}` },
    { icon: FiGithub, label: 'GitHub', href: data.github },
    { icon: FiLinkedin, label: 'LinkedIn', href: data.linkedin },
  ]

  return (
    <footer id="contact" className="border-t border-neutral-800/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-3"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 mb-10 max-w-md"
        >
          Looking for a Java backend engineer? Let's talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
            >
              <link.icon size={16} />
              <span>{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-800/50 text-xs text-neutral-600">
          <span>© {new Date().getFullYear()} {data.name}</span>
          <span>Built with Spring Boot & React</span>
        </div>
      </div>
    </footer>
  )
}
