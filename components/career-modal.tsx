"use client"

import { X, Zap, DollarSign, BookOpen, TrendingUp } from "lucide-react"

interface CareerModalProps {
  careerTitle: string
  onClose: () => void
}

export function CareerModal({ careerTitle, onClose }: CareerModalProps) {

  const careerData: Record<string, any> = {
    "UX/UI Designer": {
      overview:
        "Merancang antarmuka dan pengalaman pengguna untuk produk digital. Fokus utamanya membuat teknologi terasa intuitif dan enak dipakai.",
      salaryRange: "Rp6.000.000 - Rp18.000.000/bulan",
      skills: ["Figma/Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems"],
      difficulty: "Menengah",
      roadmap:
        "1. Kuasai dasar-dasar desain (3 bulan) → 2. Pelajari tools desain (2 bulan) → 3. Bangun portofolio (3 bulan) → 4. Lamar posisi entry-level",
    },

    "Data Analyst": {
      overview:
        "Menganalisis data untuk membantu bisnis mengambil keputusan. Bekerja dengan database, dashboard, dan tools visualisasi.",
      salaryRange: "Rp7.000.000 - Rp20.000.000/bulan",
      skills: ["SQL", "Python/R", "Tableau/Power BI", "Excel", "Statistical Analysis"],
      difficulty: "Menengah-Tinggi",
      roadmap:
        "1. Belajar dasar SQL (2 bulan) → 2. Kuasai visualisasi data (2 bulan) → 3. Python untuk analisis data (3 bulan) → 4. Bangun proyek & portofolio",
    },

    "Product Manager": {
      overview:
        "Mengatur strategi produk dan memimpin tim lintas divisi. Menjadi penghubung antara user, teknologi, dan tujuan bisnis.",
      salaryRange: "Rp10.000.000 - Rp30.000.000+/bulan",
      skills: ["Product Strategy", "Data Analysis", "User Research", "Communication", "Leadership"],
      difficulty: "Tinggi",
      roadmap:
        "1. Mulai dari role support/marketing (1–2 tahun) → 2. Pelajari fundamental PM → 3. Ikuti kursus PM → 4. Beralih ke Associate PM",
    },

    "Frontend Developer": {
      overview:
        "Membangun aplikasi web yang terlihat dan terasa langsung oleh pengguna. Fokus pada responsivitas, interaktivitas, dan performa.",
      salaryRange: "Rp8.000.000 - Rp25.000.000/bulan",
      skills: ["JavaScript/TypeScript", "React/Vue", "CSS/Tailwind", "REST APIs", "Git"],
      difficulty: "Menengah",
      roadmap:
        "1. Pelajari dasar HTML/CSS/JS (3 bulan) → 2. Kuasai satu framework (3 bulan) → 3. Bangun berbagai proyek (3 bulan) → 4. Lamar posisi junior",
    },

    "Content Creator": {
      overview:
        "Membuat konten menarik di berbagai platform. Membangun audiens dengan storytelling dan kreativitas.",
      salaryRange: "Rp3.000.000 - Rp100.000.000+/bulan (tergantung niche & monetisasi)",
      skills: ["Writing", "Video Editing", "Social Media", "SEO", "Analytics"],
      difficulty: "Menengah",
      roadmap:
        "1. Tentukan niche (1 bulan) → 2. Pelajari tools platform (1 bulan) → 3. Konsisten membuat konten (3–6 bulan) → 4. Mulai monetisasi",
    },

    "Cybersecurity Specialist": {
      overview:
        "Melindungi sistem dan jaringan digital dari serangan. Menjaga keamanan data dan kepatuhan perusahaan.",
      salaryRange: "Rp10.000.000 - Rp35.000.000+/bulan",
      skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Protocols", "Incident Response"],
      difficulty: "Tinggi",
      roadmap:
        "1. Pelajari dasar IT (6 bulan) → 2. Ikuti sertifikasi keamanan (3–6 bulan) → 3. Kumpulkan pengalaman langsung (1 tahun) → 4. Naik ke role spesialis",
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
            <h3 className="font-semibold text-lg">Ringkasan</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">{career.overview}</p>
        </section>

        {/* Salary Range */}
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={20} className="text-green-600" />
            <h3 className="font-bold text-lg text-green-900">Kisaran Gaji</h3>
          </div>
          <p className="text-2xl font-bold text-green-700">{career.salaryRange}</p>
        </div>

        {/* Required Skills */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={20} className="text-blue-600" />
            <h3 className="font-bold text-lg text-foreground">Skill yang Dibutuhkan</h3>
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
            <h3 className="font-bold text-lg">Tingkat Kesulitan</h3>
          </div>
          <p className="text-muted-foreground font-semibold text-lg">{career.difficulty}</p>
        </section>

        {/* Roadmap */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={20} className="text-indigo-600" />
            <h3 className="font-bold text-lg text-gray-900">Cara Memulai</h3>
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
