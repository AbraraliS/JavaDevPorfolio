import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { TimelineSection } from "@/components/sections/timeline"
import { CertificatesSection } from "@/components/sections/certificates"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <CertificatesSection />
      <AchievementsSection />
      <ContactSection />
      <footer className="py-10 text-center text-sm text-zinc-500">
  © {new Date().getFullYear()} Abrar Ali. All rights reserved.
      </footer>
    </main>
  )
}
