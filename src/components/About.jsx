import { motion } from 'framer-motion'
import { education } from '../data/portfolioData'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" title="about.md" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Full stack, with an AI-shaped edge.
            </h2>
            <p className="mt-5 max-w-2xl font-body text-[15px] leading-7 text-muted">
              I'm a full stack developer who spends most of my time in the MERN stack —
              React, Node.js, Express, MongoDB — and the rest of it wiring large language
              models into real products. That means REST APIs and JWT auth on one side,
              and RAG pipelines, embeddings and multi-agent orchestration with LangChain
              and LangGraph on the other.
            </p>
            <p className="mt-4 max-w-2xl font-body text-[15px] leading-7 text-muted">
              I care about the parts that don't show up in a demo: Dockerized services,
              caching and rate limiting, database replication and sharding, CI/CD — the
              plumbing that keeps an AI feature working at 2am, not just in a Postman
              collection.
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted">education</p>
            <h3 className="mt-3 font-display text-lg font-medium text-ink">
              {education.degree}
            </h3>
            <p className="mt-1 font-body text-sm text-muted">{education.school}</p>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-xs">
              <span className="text-muted">{education.period}</span>
              <span className="rounded-full bg-surface2 px-2.5 py-1 text-string">
                CGPA {education.cgpa}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs text-muted">
      <span className="text-keyword">{index}</span>
      <span className="h-px flex-1 max-w-[24px] bg-line" />
      <span className="text-ink">{title}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}
