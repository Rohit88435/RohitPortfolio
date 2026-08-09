import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import { SectionLabel } from './About'

const CATEGORY_LABELS = {
  languages: 'languages',
  frontend: 'frontend',
  backend: 'backend',
  'ai-llm': 'ai & llm',
  databases: 'databases',
  'system-design': 'system design',
  'cloud-devops': 'cloud & devops',
  'auth-tools': 'auth & tooling',
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04" title="skills.json" />
        <h2 className="mt-10 font-display text-2xl font-semibold text-ink sm:text-3xl">
          The stack, dependency by dependency
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-line bg-surface editor-shadow">
          <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-func/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-string/70" />
            <span className="ml-3 font-mono text-xs text-muted">skills.json</span>
          </div>
          <div className="p-5 sm:p-6">
            <pre className="font-mono text-[13px] leading-7 text-muted overflow-x-auto">
              <code>{'{'}</code>
            </pre>
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="pl-4 font-mono text-[13px] leading-7"
                >
                  <span className="text-func">"{CATEGORY_LABELS[group.category]}"</span>
                  <span className="text-ink">: [</span>
                  <div className="flex flex-wrap gap-1.5 py-1.5 pl-4">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-base px-2 py-0.5 text-xs text-string"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="text-ink">],</span>
                </motion.div>
              ))}
            </div>
            <pre className="font-mono text-[13px] leading-7 text-muted overflow-x-auto">
              <code>{'}'}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
