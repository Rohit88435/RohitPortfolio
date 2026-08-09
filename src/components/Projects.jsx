import { motion } from 'framer-motion'
import { Folder, ArrowUpRight } from 'lucide-react'
import { projects, profile } from '../data/portfolioData'
import { SectionLabel } from './About'

const accentClasses = {
  keyword: { text: 'text-keyword', bg: 'bg-keyword' },
  string: { text: 'text-string', bg: 'bg-string' },
  tag: { text: 'text-tag', bg: 'bg-tag' },
  func: { text: 'text-func', bg: 'bg-func' },
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel index="03" title="projects/" />
            <h2 className="mt-10 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Things I've shipped
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1 flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors"
          >
            view all repos
            <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const accent = accentClasses[project.accent]
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-muted"
              >
                <div className="flex items-center justify-between">
                  <Folder size={18} className={accent.text} />
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                </div>

                <h3 className="mt-4 font-display text-lg font-medium leading-snug text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm leading-6 text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-2 font-body text-xs leading-5 text-muted">
                      <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.bg}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-surface2 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
