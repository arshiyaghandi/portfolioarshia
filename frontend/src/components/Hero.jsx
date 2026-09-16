import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

export default function Hero({ data }) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative overflow-hidden">
      
      {/* Subtle gradient background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden ring-2 ring-neutral-800 ring-offset-4 ring-offset-[#0c0c0c]">
              <img
                src="/images/profile.jpg"
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small status dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-[#0c0c0c]"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-neutral-500 mb-2 tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight"
          >
            {data.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-medium text-blue-400 mb-6"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-400 leading-relaxed mb-8 max-w-xl"
          >
            {data.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-3"
          >
            {[
              { icon: FiGithub, href: data.github, label: 'GitHub' },
              { icon: FiLinkedin, href: data.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${data.email}`, label: 'Email' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                title={item.label}
              >
                <item.icon size={18} />
              </motion.a>
            ))}

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-neutral-400 transition-colors"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
