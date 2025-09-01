"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"

export function ProjectsSection() {
  const [showMore, setShowMore] = useState(false)
  // On mobile, show 2 or all; on desktop, always show up to 6
  let list = projects
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    list = showMore ? projects : projects.slice(0, 2)
  } else {
    list = projects.slice(0, 6)
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Card
            key={p.name}
            className="group relative overflow-hidden border-zinc-800 bg-background/60 backdrop-blur transition hover:scale-[1.01] hover:border-sky-600"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-400/0 via-sky-600/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{p.name}</span>
                <span className="text-xs text-zinc-500">{p.stack}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <img
                src={p.image || "/placeholder.svg?height=160&width=320&query=project%20screenshot"}
                alt={`${p.name} screenshot`}
                className="h-40 w-full rounded-md object-cover"
                loading="lazy"
              />
              <p className="text-sm text-zinc-500">{p.description}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Button asChild variant="outline" className="h-8 bg-transparent">
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
              {p.live && (
                <Button asChild className="h-8 bg-sky-600 hover:bg-sky-700">
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live <ExternalLink className="ml-1 size-3.5" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      {projects.length > 2 && (
        <div className="mt-6 text-center md:hidden">
          <button onClick={() => setShowMore((v) => !v)} className="text-sm text-sky-600 hover:underline">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  )
}
