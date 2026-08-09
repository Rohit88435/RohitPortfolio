import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { achievements } from '../data/portfolioData'
import { SectionLabel } from './About'

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="05" title="achievements.sh" />
        <h2 className="mt-10 font-display text-2xl font-semibold text-ink sm:text-3xl">
          npm run achievements
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-line bg-surface editor-shadow">
          <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-3">
            <Terminal size={13} className="text-muted" />
            <span className="font-mono text-xs text-muted">zsh — 80x24</span>
          </div>
          <div className="p-5 sm:p-6 font-mono text-[13px] leading-7">
            <p className="text-muted">
              <span className="text-string">➜</span> <span className="text-keyword">~/rohit</span> npm run achievements
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 rounded-md border border-line bg-base px-4 py-3"
                >
                  <span className="mt-0.5 text-string">✓</span>
                  <div>
                    <p className="text-ink">{a.value}</p>
                    <p className="text-xs text-muted">{a.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-muted">
              <span className="text-string">✓</span> 4 achievements completed
              <span className="ml-1 inline-block w-[7px] animate-blink bg-ink">&nbsp;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
