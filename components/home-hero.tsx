export function HomeHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sky-200 via-blue-50 to-blue-200 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300 to-sky-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-8 py-20 sm:py-32 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-8 max-w-3xl">
          <h1 className="text-4xl sm:text-7xl font-bold text-foreground tracking-tight">
            Jalan Karier Kamu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-blue-700">
              Dimulai dari Sini
            </span>
          </h1>

          <p className="text-base text-gray-600 sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Temukan passionmu, kembangkan keterampilan yang paling dibutuhkan, dan jelajahi perjalanan kariermu dengan percaya diri. PathZ hadir untuk membantu Gen Z membangun masa depan profesional mereka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="/assessment"
              className="group px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white rounded-2xl font-semibold hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300 transform hover:scale-105 shadow-soft"
            >
              Mulai Tes Minat Karier
            </a>

            <a
              href="/career-explorer"
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-700 rounded-2xl font-semibold hover:bg-white/90 hover:border-blue-400 transition-all duration-300 shadow-soft"
            >
              Jelajahi Karier
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
