import { motion } from 'framer-motion'
import { GitBranch, GitCommit } from 'lucide-react'
import { experience } from '../data/portfolioData'
import { SectionLabel } from './About'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" title="experience.log" />
        <h2 className="mt-10 font-display text-2xl font-semibold text-ink sm:text-3xl">
          git log --author="Rohit"
        </h2>

        <div className="relative mt-12 pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-keyword bg-base">
                <GitCommit size={9} className="text-keyword" />
              </span>

              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
                <span className="flex items-center gap-1 text-string">
                  <GitBranch size={12} />
                  {job.branch}
                </span>
                <span>·</span>
                <span>{job.period}</span>
              </div>

              <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
                {job.role}
              </h3>
              <p className="mt-0.5 font-mono text-sm text-func">{job.company}</p>

              <ul className="mt-4 space-y-2.5">
                {job.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 font-body text-sm leading-6 text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
