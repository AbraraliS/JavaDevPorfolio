import type { ReactNode } from "react"

export function ProfileRow({
  icon,
  label,
  href,
}: {
  icon: ReactNode
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-md border bg-card/60 p-3 transition hover:border-sky-600"
      aria-label={label}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm text-zinc-500 group-hover:text-foreground">{label}</span>
    </a>
  )
}
