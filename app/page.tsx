"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
