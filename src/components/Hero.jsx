import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Code2 } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import { profile } from '../data/portfolioData'

const LINES = [
  { text: 'const developer = {' },
  { text: `  name: 'Rohit Prajapati',` },
  { text: `  role: 'Full Stack Developer, AI Engineer',` },
  { text: `  stack: ['React', 'Node.js', 'LangChain', 'RAG'],` },
  { text: `  focus: 'shipping AI features that actually work',` },
  { text: '};' },
]

export default function Hero() {
  const { output, done } = useTypewriter(LINES, { speed: 22, pause: 220, startDelay: 500 })

  return (
    <section
      id="hero"
      className="dot-grid relative flex min-h-screen flex-col justify-center px-5 pt-24 pb-16 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* left: intro copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-string"
          >
            $ whoami
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            Building full-stack
            <br />
            products with a
            <br />
            <span className="text-gradient">brain made of LLMs.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md font-body text-base leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-md bg-keyword px-5 py-2.5 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              view --projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-muted"
            >
              get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <IconLink href={profile.github} label="GitHub"><Github size={18} /></IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></IconLink>
              <IconLink href={profile.leetcode} label="LeetCode"><Code2 size={18} /></IconLink>
            </div>
          </motion.div>
        </div>

        {/* right: editor window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="editor-shadow animate-float overflow-hidden rounded-xl border border-line bg-surface"
        >
          <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-func/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-string/70" />
            <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
            <code>
              {(() => {
                const cursorLine = output.findIndex((l, i) => l.length < LINES[i].text.length)
                return output.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="mr-4 select-none text-muted/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: highlight(line) }} />
                    {!done && (cursorLine === -1 ? i === output.length - 1 : i === cursorLine) && (
                      <span className="ml-0.5 inline-block w-[7px] animate-blink bg-ink" />
                    )}
                  </div>
                ))
              })()}
            </code>
          </pre>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted sm:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded-md p-2 text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {children}
    </a>
  )
}

// very small syntax highlighter for the hero snippet only
function highlight(line) {
  return line
    .replace(/(const|let)/g, '<span class="text-keyword">$1</span>')
    .replace(/('.*?')/g, '<span class="text-string">$1</span>')
    .replace(/([a-zA-Z_]+)(:)/g, '<span class="text-func">$1</span>$2')
}
