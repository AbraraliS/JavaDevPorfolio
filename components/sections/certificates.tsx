"use client"

import { useState } from "react"
import { certificates } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CertificatesSection() {
  const [showMore, setShowMore] = useState(false)
  const list = showMore ? certificates : certificates.slice(0, 2)

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-semibold">Certificates</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <button
            key={c.title}
            onClick={() => window.open(c.url, "_blank", "noopener")}
            className="text-left"
            aria-label={`Open certificate ${c.title}`}
          >
            <Card className="h-full transition hover:-translate-y-[2px] hover:border-emerald-500">
              <CardHeader>
                <CardTitle className="text-base">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-500">{c.issuer}</CardContent>
            </Card>
          </button>
        ))}
      </div>
      {certificates.length > 2 && (
        <div className="mt-6 text-center md:hidden">
          <button onClick={() => setShowMore((v) => !v)} className="text-sm text-sky-600 hover:underline">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  )
}
