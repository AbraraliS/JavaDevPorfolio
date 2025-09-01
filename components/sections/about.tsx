import { Button } from "@/components/ui/button"
import { site } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
      <p className="text-pretty text-zinc-500 leading-relaxed">
       Enthusiastic and detail-oriented backend developer with strong foundational skills in Java, Spring Boot,
Firebase, and REST API development. Currently pursuing MCA at Reva University, with a passion for
building efficient backend systems and learning modern backend frameworks. Seeking an entry-level
position or internship where I can contribute to real-world backend projects, enhance my technical
expertise, and grow within a dynamic team environment.
      </p>
      <div className="mt-6">
        <Button asChild className="bg-sky-600 hover:bg-sky-700">
          <a href={site.resumeUrl} download>
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  )
}
