import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RoadmapTimeline } from "@/components/roadmap-timeline"

export default function LearningRoadmap() {
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
              xl:w-[900px] xl:h-[900px]       /* large desktop */
              bg-blue-200/30 rounded-full blur-3xl
            "
          ></div>

          {/* Blob kiri bawah */}
          <div
            className="
              absolute bottom-10 left-20 
              w-96 h-96
              md:w-[450px] md:h-[450px]
              lg:w-[800px] lg:h-[800px]
              xl:w-[1000px] xl:h-[1000px]
              bg-cyan-200/20 rounded-full blur-3xl
            "
          ></div>
        </div>
        
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Rencana Belajar Kamu</h1>
              <p className="text-base md:text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Ikuti langkah belajar yang terstruktur untuk membangun skill penting dan mencapai tujuan kariermu.
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
