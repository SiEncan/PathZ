import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CVTemplateCard } from "@/components/cv-template-card"

import FileUploadCard from "@/components/file-upload-card"
import AnalysisCard from "@/components/analysis-card"

export default function CVTools() {
  const templates = [
    { 
      id: 1, 
      name: "CV Modern", 
      description: "Desain bersih dan kekinian, cocok untuk peran di dunia tech.", 
      icon: "✨" 
    },
    { 
      id: 2, 
      name: "CV Profesional", 
      description: "Format klasik yang disukai banyak recruiter.", 
      icon: "📋" 
    },
    { 
      id: 3, 
      name: "CV Kreatif", 
      description: "Tampil beda dengan desain visual yang lebih unik.", 
      icon: "🎨" 
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-50 text-foreground">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CV & Job Tools</h1>
            <p className="text-lg text-muted-foreground">
              Bikin CV yang standout, latihan interview, dan temukan peluang kerja yang cocok buat kamu.
            </p>
          </div>
        </section>

        {/* CV Templates Section */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Template CV</h2>
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
        <main className="flex items-center justify-center pt-4 py-16">
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
