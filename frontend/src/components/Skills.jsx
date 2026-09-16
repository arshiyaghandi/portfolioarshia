import { motion } from 'framer-motion'

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) return null
  const names = skills.map(s => typeof s === 'string' ? s : s.name)

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } }
  }
  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { opacity: 1, scale: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-24 border-t border-neutral-800/50 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white mb-10"
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {names.map((skill) => (
          <motion.span
            key={skill}
            variants={item}
            whileHover={{ y: -4, scale: 1.08, backgroundColor: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.4)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
