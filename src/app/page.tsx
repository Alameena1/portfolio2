"use client"
import { Hero } from "@/app/components/hero"
import { About } from "@/app/components/about"
import { Skills } from "@/app/components/skills"
import { Experience } from "@/app/components/experience"
import { Projects } from "@/app/components/projects"
import { Contact } from "@/app/components/contact"
import { Navigation } from "@/app/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
