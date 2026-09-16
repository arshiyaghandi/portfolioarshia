import { motion } from 'framer-motion'

export default function Experience({ experiences }) {
  if (!experiences || experiences.length === 0) return null

  return (
    <section id="experience" className="py-24 border-t border-neutral-800/50 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white mb-10"
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ x: 6 }}
            className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl cursor-default"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
              </div>
              <span className="text-xs text-neutral-500 bg-neutral-800 px-3 py-1 rounded-full w-fit">
                {exp.date}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.description && exp.description.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
