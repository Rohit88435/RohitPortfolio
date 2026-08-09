import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { profile } from '../data/portfolioData'

const COMMANDS = [
  { id: 'about', label: 'Go to About', section: '#about', icon: ArrowRight },
  { id: 'experience', label: 'Go to Experience', section: '#experience', icon: ArrowRight },
  { id: 'projects', label: 'Go to Projects', section: '#projects', icon: ArrowRight },
  { id: 'skills', label: 'Go to Skills', section: '#skills', icon: ArrowRight },
  { id: 'achievements', label: 'Go to Achievements', section: '#achievements', icon: ArrowRight },
  { id: 'contact', label: 'Go to Contact', section: '#contact', icon: ArrowRight },
  { id: 'github', label: 'Open GitHub profile', href: profile.github, icon: Github },
  { id: 'linkedin', label: 'Open LinkedIn profile', href: profile.linkedin, icon: Linkedin },
  { id: 'leetcode', label: 'Open LeetCode profile', href: profile.leetcode, icon: Code2 },
  { id: 'email', label: `Email ${profile.email}`, href: `mailto:${profile.email}`, icon: Mail },
]

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function runCommand(cmd) {
    if (!cmd) return
    if (cmd.href) {
      window.open(cmd.href, '_blank', 'noopener,noreferrer')
    } else if (cmd.section) {
      document.querySelector(cmd.section)?.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      runCommand(filtered[activeIndex])
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-24 sm:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface editor-shadow"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <Search size={16} className="text-muted shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section, or run a command…"
                className="w-full bg-transparent font-mono text-sm text-ink placeholder:text-muted outline-none"
                aria-label="Command input"
              />
              <kbd className="hidden sm:inline rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
                esc
              </kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto py-2" role="listbox">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center font-mono text-xs text-muted">
                  No matches for “{query}”
                </li>
              )}
              {filtered.map((cmd, i) => {
                const Icon = cmd.icon
                return (
                  <li key={cmd.id} role="option" aria-selected={i === activeIndex}>
                    <button
                      onClick={() => runCommand(cmd)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                        i === activeIndex ? 'bg-surface2 text-ink' : 'text-muted'
                      }`}
                    >
                      <Icon size={14} className="text-keyword shrink-0" />
                      <span>{cmd.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
