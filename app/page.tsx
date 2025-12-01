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
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Blob kanan atas */}
          <div
            className="
              absolute top-20 right-20 
              w-96 h-96                       /* mobile */
              md:w-[500px] md:h-[500px]       /* tablet */
              lg:w-[750px] lg:h-[750px]       /* desktop */
              xl:w-[850px] xl:h-[850px]       /* large desktop */
              bg-blue-300/30 rounded-full blur-3xl
            "
          ></div>

          {/* Blob kiri bawah */}
          <div
            className="
              absolute bottom-20 left-20 
              w-96 h-96
              md:w-[450px] md:h-[450px]
              lg:w-[800px] lg:h-[800px]
              xl:w-[900px] xl:h-[900px]
              bg-cyan-200/20 rounded-full blur-3xl
            "
          ></div>
        </div>
        <HomeHero />
        <HomePassionSkills />
        <HomeFeatures />
      </main>
      <Footer />
    </div>
  )
}
