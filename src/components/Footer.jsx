import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Framer Motion.</p>
        <p className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-string" />
          available for freelance &amp; full-time roles
        </p>
      </div>
    </footer>
  )
}
