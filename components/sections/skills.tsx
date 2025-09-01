"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Coffee,
  Braces,
  Database,
  Binary,
  Leaf,
  Layers,
  Wrench,
  Package,
  GitBranch,
  Boxes,
  Keyboard,
  Cloud,
} from "lucide-react"
import type { JSX } from "react/jsx-runtime"

type Skill = { name: string; icon: JSX.Element }
type Category = { title: string; items: Skill[] }

const categories: Category[] = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: <Coffee className="text-sky-600" /> },
      { name: "JavaScript", icon: <Braces className="text-emerald-500" /> },
      { name: "SQL", icon: <Database className="text-zinc-500" /> },
      { name: "Python", icon: <Binary className="text-sky-600" /> },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", icon: <Leaf className="text-emerald-500" /> },
      { name: "Hibernate", icon: <Layers className="text-zinc-500" /> },
      { name: "Maven", icon: <Wrench className="text-sky-600" /> },
      { name: "Gradle", icon: <Package className="text-emerald-500" /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: <Database className="text-sky-600" /> },
      { name: "MongoDB", icon: <Database className="text-emerald-500" /> },
      { name: "PostgreSQL", icon: <Database className="text-zinc-500" /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <GitBranch className="text-zinc-500" /> },
      { name: "Docker", icon: <Boxes className="text-sky-600" /> },
      { name: "Jenkins", icon: <Wrench className="text-emerald-500" /> },
      { name: "IntelliJ IDEA", icon: <Keyboard className="text-sky-600" /> },
    ],
  },
  {
    title: "Cloud",
    items: [
      { name: "AWS (Basics)", icon: <Cloud className="text-emerald-500" /> },
      { name: "GCP (Basics)", icon: <Cloud className="text-sky-600" /> },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <SkillCategory key={cat.title} {...cat} />
        ))}
      </div>
    </section>
  )
}

function SkillCategory({ title, items }: Category) {
  const [showMore, setShowMore] = useState(false)
  const visible = showMore ? items : items.slice(0, 3)

  return (
    <Card className="bg-background/60 backdrop-blur">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {visible.map((s) => (
            <li
              key={s.name}
              className="group flex items-center gap-3 rounded-md border bg-card/70 p-3 transition hover:scale-[1.02] hover:border-sky-600"
            >
              <span className="text-xl">{s.icon}</span>
              <span className="text-sm text-zinc-400 group-hover:text-foreground">{s.name}</span>
            </li>
          ))}
        </ul>
        {items.length > 3 && (
          <button
            onClick={() => setShowMore((v) => !v)}
            className="mt-4 text-sm text-sky-600 hover:underline md:hidden"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </CardContent>
    </Card>
  )
}
