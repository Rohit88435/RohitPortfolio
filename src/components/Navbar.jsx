import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Command, Menu, X } from 'lucide-react'

const TABS = [
  { id: 'about', label: 'about.md' },
  { id: 'experience', label: 'experience.log' },
  { id: 'projects', label: 'projects/' },
  { id: 'skills', label: 'skills.json' },
  { id: 'contact', label: 'contact.sh' },
]

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        scrolled ? 'border-line bg-base/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => goTo('hero')}
          className="flex items-center gap-2 py-3 font-mono text-sm font-semibold text-ink"
        >
          <span className="text-keyword">&lt;</span>
          rohit
          <span className="text-string">.dev</span>
          <span className="text-keyword">/&gt;</span>
        </button>

        {/* desktop tabs */}
        <nav className="hidden md:flex items-stretch">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
              className={`relative px-4 py-3 font-mono text-xs transition-colors ${
                activeTab === tab.id ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-keyword"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="hidden sm:flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 font-mono text-xs text-muted hover:text-ink hover:border-muted transition-colors"
            aria-label="Open command palette"
          >
            <Command size={12} />
            <span>K</span>
          </button>
          <button
            className="md:hidden text-ink p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden flex flex-col border-t border-line bg-base px-5 pb-3">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
              className="py-2.5 text-left font-mono text-sm text-muted hover:text-ink"
            >
              {tab.label}
            </button>
          ))}
        </nav>
      )}
    </motion.header>
  )
}
