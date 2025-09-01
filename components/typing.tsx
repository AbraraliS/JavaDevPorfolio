"use client"

import { useEffect, useState } from "react"

type TypingProps = {
  phrases: string[]
  speed?: number
  pause?: number
  className?: string
}
export function Typing({ phrases, speed = 40, pause = 1400, className }: TypingProps) {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    if (!deleting && sub.length < current.length) {
      const t = setTimeout(() => setSub(current.slice(0, sub.length + 1)), speed)
      return () => clearTimeout(t)
    }
    if (!deleting && sub.length === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && sub.length > 0) {
      const t = setTimeout(() => setSub(current.slice(0, sub.length - 1)), speed / 1.5)
      return () => clearTimeout(t)
    }
    if (deleting && sub.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
    }
  }, [phrases, index, sub, deleting, speed, pause])

  return (
    <span className={className} aria-live="polite">
      {sub}
      <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-[2px] animate-pulse bg-emerald-400" />
    </span>
  )
}
