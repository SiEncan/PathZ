import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareerCard } from "@/components/career-card"

export default function CareerExplorer() {
  const skillBasedCareers = [
    {
      id: "uiux",
      title: "UX/UI Designer",
      description: "Mendesain pengalaman digital yang cantik, intuitif, dan mudah digunakan.",
      icon: "🎨",
    },
    {
      id: "data",
      title: "Data Analyst",
      description: "Mengubah data menjadi insight yang bisa membantu pengambilan keputusan bisnis.",
      icon: "📊",
    },
    {
      id: "frontend",
      title: "Frontend Developer",
      description: "Membangun aplikasi web yang responsif, cepat, dan interaktif.",
      icon: "💻",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Specialist",
      description: "Melindungi sistem dan jaringan digital dari ancaman siber.",
      icon: "🔒",
    },
  ]

  const passionBasedCareers = [
    {
      id: "pm",
      title: "Product Manager",
      description: "Memimpin strategi produk dan membawa ide menjadi kenyataan.",
      icon: "🚀",
    },
    {
      id: "creator",
      title: "Content Creator",
      description: "Membangun audiens dan pengaruh lewat konten kreatif.",
      icon: "🎬",
    },
    {
      id: "entrepreneur",
      title: "Entrepreneur",
      description: "Membangun bisnis dari awal dan menciptakan sesuatu yang bermakna.",
      icon: "🌟",
    },
    {
      id: "consultant",
      title: "Business Consultant",
      description: "Membantu perusahaan memecahkan masalah dan berkembang lebih cepat.",
      icon: "💼",
    },
  ]


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
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto px-8 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Jelajahi Karier yang Cocok Untukmu
              </h1>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Temukan pilihan karier yang selaras dengan skill dan passion-mu. Pelajari apa saja yang dibutuhkan untuk sukses di setiap peran.
              </p>
            </div>
          </div>
        </section>

        {/* Skill-Based Careers */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Karier Berbasis Skill</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Pilihan karier yang dibangun dari keahlian teknis dan skill khusus.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillBasedCareers.map((career) => (
                <CareerCard key={career.id} {...career} />
              ))}
            </div>
          </div>
        </section>

        {/* Passion-Based Careers */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-8 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Karier Berbasis Passion</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Karier yang digerakkan oleh passion, kreativitas, dan tujuan pribadi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {passionBasedCareers.map((career) => (
                <CareerCard key={career.id} {...career} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
