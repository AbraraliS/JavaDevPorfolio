"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/data"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus("sending")
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        setStatus("sent")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-4 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(2,132,199,0.08),transparent_40%)]"
      />
      <h2 className="mb-6 text-2xl font-semibold">Contact</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-4 rounded-lg border bg-card/60 p-4 backdrop-blur">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-zinc-400">
              Name
            </label>
            <Input id="name" name="name" required placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-zinc-400">
              Email
            </label>
            <Input id="email" type="email" name="email" required placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-zinc-400">
              Message
            </label>
            <Textarea id="message" name="message" required placeholder="Tell me about your project..." />
          </div>
          <Button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700"
            disabled={status === "sending"}
            aria-live="polite"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
          </Button>
          {status === "error" && (
            <p className="text-sm text-emerald-400">Something went wrong. Please email me directly.</p>
          )}
        </form>
        <div className="space-y-3 rounded-lg border bg-card/60 p-4 backdrop-blur">
          <p className="text-sm text-zinc-500">
            Prefer email? Reach out at{" "}
            <a href={`mailto:${site.email}`} className="text-sky-600 hover:underline">
              {site.email}
            </a>
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              LinkedIn:{" "}
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">
                {site.linkedin}
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href={site.github} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">
                {site.github}
              </a>
            </li>
            <li>
              LeetCode:{" "}
              <a href={site.leetcode} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">
                {site.leetcode}
              </a>
            </li>
          </ul>
          <div className="rounded-md bg-zinc-900 p-3 font-mono text-xs text-zinc-300">
            {">_"} Terminal
            <div className="mt-2 text-zinc-400">{"$"} echo "Let&apos;s build something awesome in Java!"</div>
          </div>
        </div>
      </div>
    </section>
  )
}
