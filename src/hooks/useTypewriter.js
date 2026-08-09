import { useEffect, useState } from 'react'

/**
 * Types out an array of lines one character at a time, waiting `pause` ms
 * between lines. Returns the lines typed so far plus a `done` flag.
 */
export function useTypewriter(lines, { speed = 28, pause = 350, startDelay = 300 } = {}) {
  const [output, setOutput] = useState(() => lines.map(() => ''))
  const [lineIndex, setLineIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setOutput(lines.map((l) => l.text))
      setDone(true)
      return
    }

    let charIndex = 0
    let cancelled = false
    let timeoutId

    const typeChar = () => {
      if (cancelled) return
      const current = lines[lineIndex]
      if (!current) {
        setDone(true)
        return
      }
      if (charIndex <= current.text.length) {
        setOutput((prev) => {
          const next = [...prev]
          next[lineIndex] = current.text.slice(0, charIndex)
          return next
        })
        charIndex += 1
        timeoutId = setTimeout(typeChar, speed)
      } else {
        timeoutId = setTimeout(() => {
          if (!cancelled) setLineIndex((i) => i + 1)
        }, pause)
      }
    }

    timeoutId = setTimeout(typeChar, lineIndex === 0 ? startDelay : 0)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex])

  return { output, done }
}
