export function HomeFeatures() {
  const features = [
    {
      icon: "📋",
      title: "Career Tests",
      description:
        "Assessment komprehensif untuk mengungkap minat karier, gaya kerja, dan kekuatan utama kamu.",
    },
    {
      icon: "🔍",
      title: "Career Explorer",
      description:
        "Jelajahi ribuan jalur karier dengan data nyata tentang gaji, prospek pertumbuhan, dan gambaran pekerjaan sehari-hari.",
    },
    {
      icon: "🗺️",
      title: "Learning Roadmap",
      description:
        "Rencana belajar yang dipersonalisasi dengan rekomendasi skill, kursus, dan milestone untuk mencapai tujuanmu.",
    },
    {
      icon: "💼",
      title: "Job Tools",
      description:
        "Pembuat CV, generator cover letter, dan panduan persiapan interview untuk membantu kamu meraih peran impian.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-light-blue-50/50 via-white to-blue-50/50">
      <div className="max-w-6xl mx-auto px-8 md:px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Semua yang Kamu Butuhkan</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi berbagai tools dan sumber belajar untuk mempercepat perjalanan eksplorasi kariermu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
