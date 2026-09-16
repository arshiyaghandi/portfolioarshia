import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null

  return (
    <section id="projects" className="py-24 border-t border-neutral-800/50 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors block"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-neutral-500 mt-0.5">{project.subtitle}</p>
                )}
              </div>
              <motion.div
                className="text-neutral-600 group-hover:text-blue-400 transition-colors ml-3"
                whileHover={{ rotate: 45 }}
              >
                <FiArrowUpRight size={20} />
              </motion.div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {Array.isArray(project.tech) ? project.tech.map((t, i) => (
                <span key={i} className="text-xs bg-neutral-800 text-neutral-400 px-2.5 py-1 rounded-md">
                  {t}
                </span>
              )) : project.tech && (
                <span className="text-xs bg-neutral-800 text-neutral-400 px-2.5 py-1 rounded-md">
                  {project.tech}
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
