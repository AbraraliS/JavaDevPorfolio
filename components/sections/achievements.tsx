import { achievements } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiLeetcode, SiHackerrank, SiCodeforces, SiGithub } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { ProfileRow } from "./ProfileRow" // Declare the ProfileRow component before using it

export function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-2xl font-semibold">Achievements & Coding Profiles</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Coding Profiles</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <ProfileRow
              icon={<SiLeetcode className="text-emerald-500" />}
              label="LeetCode"
              href={achievements.leetcode}
            />
            <ProfileRow
              icon={<SiHackerrank className="text-emerald-500" />}
              label="HackerRank"
              href={achievements.hackerrank}
            />
            <ProfileRow
              icon={<SiCodeforces className="text-sky-600" />}
              label="Codeforces"
              href={achievements.codeforces}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Open Source</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <SiGithub className="text-zinc-500" />
              <div>
                <p className="text-sm text-zinc-500">Explore my repositories and contributions on GitHub.</p>
                <Button asChild size="sm" className="mt-2 bg-sky-600 hover:bg-sky-700">
                  <a href={achievements.github} target="_blank" rel="noreferrer">
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
            <img
              src="/contributions.png"
              alt="GitHub contributions chart placeholder"
              className="w-full rounded-md border"
              loading="lazy"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
