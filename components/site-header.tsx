"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Timeline", "#timeline"],
    ["Certificates", "#certificates"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"],
  ] as const

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#home" className="font-mono text-sm text-zinc-400 hover:text-foreground">
          {"<"}Abrar Ali{"/>"}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn("text-sm text-zinc-500 transition-colors hover:text-foreground")}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden bg-sky-600 hover:bg-sky-700 md:inline-flex">
            <a href="#contact">Hire Me</a>
          </Button>
          <ThemeToggle />
          {/* Mobile hamburger */}
          <Button
            variant="outline"
            size="icon"
            aria-label="Open menu"
            aria-controls="mobile-nav"
            aria-expanded={open}
            className="md:hidden bg-transparent"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>

      {/* Mobile slide-over */}
      <div
        className={cn(
          "fixed inset-0 z-50 transform transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <button
          aria-label="Close menu"
          className={cn("absolute inset-0 bg-black/40 transition-opacity", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          id="mobile-nav"
          className={cn("ml-auto flex h-full w-72 flex-col gap-1 border-l bg-background p-4 shadow-xl")}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-zinc-400">
              {"<"}Abrar Ali{"/>"}
            </span>
            <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="size-4" />
            </Button>
          </div>
          <div className="mt-2 h-px w-full bg-zinc-800" />
          <nav className="mt-2 flex flex-col">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-4">
            <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
              <a href="#contact" onClick={() => setOpen(false)}>
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
