import { timeline } from "@/lib/data"

export function TimelineSection() {
  return (
    <section id="timeline" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-semibold">Education</h2>
      <ol className="relative border-l border-zinc-800">
        {timeline.map((t, i) => (
          <li key={i} className="mb-8 ml-6">
            <span className="absolute -left-1.5 mt-1.5 size-3 rounded-full border border-sky-600 bg-background" />
            <h3 className="font-medium">{t.title}</h3>
            <p className="text-sm text-zinc-500">
              {t.org} • {t.year}
            </p>
            {t.detail && <p className="mt-1 text-sm text-zinc-500">{t.detail}</p>}
          </li>
        ))}
      </ol>
    </section>
  )
}
