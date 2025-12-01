import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/home-hero"
import { HomePassionSkills } from "@/components/home-passion-skills"
import { HomeFeatures } from "@/components/home-features"

export const metadata = {
  title: "PathZ - Gen Z Career Navigator",
  description: "Discover your career path with PathZ. Career tests, learning roadmaps, and tools designed for Gen Z.",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <HomePassionSkills />
        <HomeFeatures />
      </main>
      <Footer />
    </div>
  )
}
