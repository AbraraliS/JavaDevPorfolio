"use client"

import { Button } from "@/components/ui/button"
import { AnimatedCodeBg } from "@/components/animated-code-bg"
import { Typing } from "@/components/typing"
import { Github, Linkedin } from "lucide-react"
import { site } from "@/lib/data"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <AnimatedCodeBg />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pb-16 pt-24 text-center md:pt-28">
        <img
          src="/developer-avatar.png"
          alt="Portrait of Abrar Ali"
          className="h-24 w-24 rounded-full border border-zinc-800 object-cover shadow-sm"
          loading="lazy"
        />
        <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
          Hi, I’m <span className="text-emerald-400">Abrar Ali</span> — Fresher Software Developer | Java Developer
        </h1>
        <Typing
          className="text-balance text-zinc-500 md:text-lg"
          phrases={["I build REST APIs", "I love Java", "I solve coding challenges"]}
        />
        <div className="flex items-center gap-3">
          <Button asChild className="bg-sky-600 hover:bg-sky-700">
            <a href={site.resumeUrl} download>
              Download Resume
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="GitHub">
            <a href={site.github} target="_blank" rel="noreferrer">
              <Github className="size-5" />
            </a>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="LinkedIn">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="size-5" />
            </a>
          </Button>
        </div>
        <p className="max-w-2xl text-center text-sm text-zinc-500">
          Backend-focused developer passionate about Java, Spring Boot, and solving real-world problems with clean,
          scalable APIs.
        </p>
      </div>
    </section>
  )
}
