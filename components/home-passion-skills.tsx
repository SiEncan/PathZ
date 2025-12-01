export function HomePassionSkills() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Passion vs Skill: Temukan Keseimbanganmu!
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Karier terbaik lahir dari gabungan apa yang kamu suka dan apa yang dibutuhkan dunia. Yuk cari titik
            temu dari keduanya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Passion column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full border border-pink-200">
              <span className="text-2xl">❤</span>
              <span className="font-semibold text-pink-700">Passion Kamu</span>
            </div>
            <p className="text-foreground leading-relaxed text-sm md:text-lg text-gray-700">
              Apa yang menggerakkanmu? Apa yang ingin kamu selesaikan? Passion adalah sesuatu yang membuat 
              kamu tetap jalan meski banyak tantangan, dan membentuk cerita karier kamu sendiri.
            </p>
            <ul className="space-y-3">
              {[
                "Hal yang bikin kamu semangat",
                "Hal yang terasa alami untuk kamu",
                "Hal yang rela kamu lakukan tanpa dibayar"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 bg-pink-50 rounded-xl border border-pink-200">
                  <span className="text-pink-600 font-bold text-xl">✓</span>
                  <span className="text-foreground font-medium mt-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold text-blue-700">Skill yang Dibutuhkan Pasar</span>
            </div>
            <p className="text-foreground leading-relaxed text-sm md:text-lg text-gray-700">
              Apa yang sedang dicari industri? Skill apa yang makin bernilai? Menguasai skill yang banyak dibutuhkan
              bikin passion kamu bisa berubah jadi peluang nyata.
            </p>
            <ul className="space-y-3">
              {[
                "Banyak dicari perusahaan",
                "Relevan untuk masa depan",
                "Memberi kamu keunggulan kompetitif"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-blue-600 font-bold text-xl">⚡</span>
                  <span className="text-foreground font-medium mt-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
