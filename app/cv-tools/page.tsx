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

  const jobs = [
    {
      id: 1,
      title: "Junior Product Manager",
      company: "TechStart Inc.",
      location: "Remote",
      level: "Entry",
      salary: "$60k - $75k",
      tags: ["Product", "Analytics", "Communication"],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Studios",
      location: "New York, NY",
      level: "Mid",
      salary: "$80k - $100k",
      tags: ["Design", "Figma", "User Research"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Web Solutions",
      location: "San Francisco, CA",
      level: "Mid",
      salary: "$90k - $120k",
      tags: ["React", "TypeScript", "CSS"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">CV & Job Tools</h1>
            <p className="text-lg text-muted-foreground">
              Create stunning CVs, practice interviews, and discover job opportunities.
            </p>
          </div>
        </section>

        {/* CV Templates Section */}
        <section className="py-8 px-4">
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
        <main className="flex items-center justify-center p-4 md:p-8">
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
          </div>

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
