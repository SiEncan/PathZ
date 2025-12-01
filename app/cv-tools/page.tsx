import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CVTemplateCard } from "@/components/cv-template-card"

import FileUploadCard from "@/components/file-upload-card"
import AnalysisCard from "@/components/analysis-card"

export default function CVTools() {
  const templates = [
    { id: 1, name: "Modern CV", description: "Clean and contemporary design perfect for tech roles", icon: "✨" },
    { id: 2, name: "Professional CV", description: "Traditional format trusted by recruiters", icon: "📋" },
    { id: 3, name: "Creative CV", description: "Stand out with a unique visual design", icon: "🎨" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8">
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
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CV & Job Tools</h1>
            <p className="text-lg text-muted-foreground">
              Create stunning CVs, practice interviews, and discover job opportunities.
            </p>
          </div>
        </section>

        {/* CV Templates Section */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">CV Templates</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {templates.map((template) => (
                <CVTemplateCard
                  key={template.id}
                  name={template.name}
                  description={template.description}
                  icon={template.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CV Analyzer & Mock Interview Section */}
        <main className="flex items-center justify-center">
          <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-6">
            <FileUploadCard />
            <AnalysisCard />
          </div>
        </main>
      </main>
      <Footer />
    </div>
  )
}
