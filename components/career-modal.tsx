"use client"

import { X, Zap, DollarSign, BookOpen, TrendingUp } from "lucide-react"

interface CareerModalProps {
  careerTitle: string
  onClose: () => void
}

export function CareerModal({ careerTitle, onClose }: CareerModalProps) {
  // Sample data for different careers
  const careerData: Record<string, any> = {
    "UX/UI Designer": {
      overview:
        "Design user interfaces and experiences for digital products. Focus on making technology intuitive and beautiful.",
      salaryRange: "$60,000 - $120,000",
      skills: ["Figma/Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems"],
      difficulty: "Medium",
      roadmap:
        "1. Master design fundamentals (3 months) → 2. Learn design tools (2 months) → 3. Build portfolio (3 months) → 4. Apply to entry-level roles",
    },
    "Data Analyst": {
      overview:
        "Analyze data to help businesses make informed decisions. Work with databases, dashboards, and visualization tools.",
      salaryRange: "$55,000 - $100,000",
      skills: ["SQL", "Python/R", "Tableau/Power BI", "Excel", "Statistical Analysis"],
      difficulty: "Medium-High",
      roadmap:
        "1. Learn SQL basics (2 months) → 2. Master data visualization (2 months) → 3. Python for data analysis (3 months) → 4. Build projects & portfolio",
    },
    "Product Manager": {
      overview:
        "Own product strategy and lead cross-functional teams. Bridge between users, technology, and business goals.",
      salaryRange: "$70,000 - $150,000",
      skills: ["Product Strategy", "Data Analysis", "User Research", "Communication", "Leadership"],
      difficulty: "High",
      roadmap:
        "1. Start in support/marketing (1-2 years) → 2. Learn PM fundamentals → 3. Take PM courses → 4. Transition to Associate PM role",
    },
    "Frontend Developer": {
      overview:
        "Build user-facing applications using web technologies. Create responsive, interactive, and performant web apps.",
      salaryRange: "$65,000 - $130,000",
      skills: ["JavaScript/TypeScript", "React/Vue", "CSS/Tailwind", "REST APIs", "Git"],
      difficulty: "Medium",
      roadmap:
        "1. Learn HTML/CSS/JS fundamentals (3 months) → 2. Master a framework (3 months) → 3. Build projects (3 months) → 4. Apply to junior roles",
    },
    "Content Creator": {
      overview:
        "Create engaging content across platforms. Build audience and influence through storytelling and creativity.",
      salaryRange: "$30,000 - $200,000+",
      skills: ["Writing", "Video Editing", "Social Media", "SEO", "Analytics"],
      difficulty: "Medium",
      roadmap:
        "1. Choose your niche (1 month) → 2. Learn platform tools (1 month) → 3. Create consistently (3-6 months) → 4. Monetize",
    },
    "Cybersecurity Specialist": {
      overview:
        "Protect digital systems and networks from attacks. Ensure data security and compliance across organizations.",
      salaryRange: "$70,000 - $140,000",
      skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Protocols", "Incident Response"],
      difficulty: "High",
      roadmap:
        "1. IT fundamentals (6 months) → 2. Security certifications (3-6 months) → 3. Hands-on experience (1 year) → 4. Specialist role",
    },
  }

  const career = careerData[careerTitle] || careerData["UX/UI Designer"]

  return (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white/90 border border-blue-100 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl animate-in fade-in zoom-in-95 duration-300">

      {/* Header */}
      <div className="sticky top-0 flex justify-between items-center p-6 sm:p-8 
        bg-white/70 backdrop-blur-lg border-b border-blue-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{careerTitle}</h2>
        <button onClick={onClose} className="p-2 hover:bg-blue-50 rounded-xl transition-colors">
          <X size={24} className="text-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Overview */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
            <h3 className="font-semibold text-lg">Overview</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">{career.overview}</p>
        </section>

        {/* Salary Range */}
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={20} className="text-green-600" />
            <h3 className="font-bold text-lg text-green-900">Salary Range</h3>
          </div>
          <p className="text-2xl font-bold text-green-700">{career.salaryRange}</p>
        </div>

        {/* Required Skills */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={20} className="text-blue-600" />
            <h3 className="font-bold text-lg text-foreground">Required Skills</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {career.skills.map((skill: any) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Difficulty Level */}
        <section className="space-y-2">
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-orange-600" />
            <h3 className="font-bold text-lg">Difficulty Level</h3>
          </div>
          <p className="text-muted-foreground font-semibold text-lg">{career.difficulty}</p>
        </section>

        {/* Roadmap */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={20} className="text-indigo-600" />
            <h3 className="font-bold text-lg text-gray-900">Roadmap on How to Start</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{career.roadmap}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-blue-100">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-blue-200 text-blue-700 rounded-xl 
              hover:bg-blue-50 transition-all font-semibold"
          >
            Close
          </button>

          <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold 
            hover:bg-blue-700 transition-all">
            Save Career
          </button>
        </div>

      </div>
    </div>
  </div>
)

}
