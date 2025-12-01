import { CheckCircle2 } from "lucide-react"

export function RoadmapTimeline() {
  const roadmaps = [
    {
      title: "Skill Digital Dasar",
      steps: [
        {
          title: "Kuasi Produktivitas Office",
          description: "Excel, Google Workspace, dan tools presentasi—skill penting buat hampir semua pekerjaan.",
        },
        {
          title: "Pelajari Tools Komunikasi",
          description: "Slack, Teams, etika email—biar makin efektif kerja sama tim, terutama remote.",
        },
        {
          title: "Pahami Dasar Cloud",
          description: "Google Drive, OneDrive, sharing, dan keamanan penyimpanan berbasis cloud.",
        },
        {
          title: "Basic Cybersecurity",
          description: "Cara kelola password, deteksi phishing, dan jaga keamanan data.",
        },
      ],
    },
    {
      title: "Soft Skills untuk Gen Z",
      steps: [
        {
          title: "Emotional Intelligence",
          description: "Belajar memahami diri, empati, dan ngatur emosi saat kerja.",
        },
        {
          title: "Komunikasi & Presentasi",
          description: "Nulis dengan jelas, ngomong percaya diri, dan nyampein ide secara efektif.",
        },
        {
          title: "Kolaborasi & Teamwork",
          description: "Kerja lintas divisi, nyelesain konflik, dan bangun hubungan kerja yang solid.",
        },
        {
          title: "Adaptasi & Growth Mindset",
          description: "Siap berubah, terus belajar, dan cepat bangkit dari kegagalan.",
        },
      ],
    },
    {
      title: "Jalur Karir: Tech ke Product Manager",
      steps: [
        {
          title: "Tahun 1: Fondasi Engineering",
          description: "Mulai sebagai junior engineer, pelajari codebase, dan pahami produk dari sisi teknis.",
        },
        {
          title: "Tahun 2-3: Pengaruh & Dampak",
          description: "Atur proyek yang lebih besar, berkontribusi ke keputusan produk, dan mulai mentoring.",
        },
        {
          title: "Tahun 3-4: Transisi ke PM",
          description:
            "Masuk ke role Associate PM, pimpin inisiatif lintas tim, dan bangun kemampuan strategi produk.",
        },
        {
          title: "Tahun 5+: Senior PM",
          description:
            "Pegang lini produk besar, tentuin arah produk, dan drive keputusan bisnis level tinggi.",
        },
      ],
    },
  ];

  return (
    <section className="w-full py-14 md:py-20 bg-gradient-to-br from-blue-50/40 via-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-8 space-y-20">

        {roadmaps.map((roadmap, roadmapIdx) => (
          <div key={roadmapIdx} className="space-y-6 md:space-y-12">

            {/* Title */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">{roadmap.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>

            {/* Timeline */}
            <div className="relative">

              {/* Timeline Line Center */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 rounded-full -translate-x-1/2"></div>

              <div className="space-y-14">
                {roadmap.steps.map((step, stepIdx) => {
                  const isLeft = stepIdx % 2 === 0

                  return (
                    <div
                      key={stepIdx}
                      className={`relative flex items-center md:items-start  
                        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} 
                        flex-col gap-6 md:gap-10`}
                    >

                      {/* Number Bubble */}
                      <div className="absolute left-1/2 md:left-1/2 -translate-x-1/2 md:-top-6">
                        <div className="bg-white border border-blue-200 shadow-md text-blue-600 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
                          {stepIdx + 1}
                        </div>
                      </div>

                      {/* Check Icon */}
                      <div className={`${isLeft ? "md:mr-2" : "md:ml-2"} md:mt-6`}>
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full hidden md:flex items-center justify-center shadow-lg ring-4 ring-blue-100">
                          <CheckCircle2 size={26} />
                        </div>
                      </div>

                      {/* Content Box */}
                      <div
                        className={`bg-white rounded-2xl p-6 border border-blue-200 shadow-sm 
                        hover:bg-blue-50 hover:shadow-md transition-all duration-300 
                        w-full md:w-[48%]
                        ${isLeft ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}`}
                      >
                        <h3 className="font-bold text-lg md:text-xl text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>

                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
