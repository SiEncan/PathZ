import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RoadmapTimeline } from "@/components/roadmap-timeline"

export default function LearningRoadmap() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Your Learning Roadmap</h1>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Follow structured learning paths to build essential skills and achieve your career goals.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <RoadmapTimeline />
      </main>
      <Footer />
    </div>
  )
}
