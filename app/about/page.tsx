import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Career strategist with 8+ years in talent development. Passionate about demystifying career paths for Gen Z.",
    image: "/professional-woman-ceo.jpg",
  },
  {
    name: "Junardi Chailesia",
    role: "Head of Product",
    bio: "Product designer & strategist. Focused on creating intuitive experiences that guide Gen Z to their dream careers.",
    image: "/junardi.jpg",
  },
  {
    name: "Aisha Patel",
    role: "Lead Engineer",
    bio: "Full-stack developer with passion for AI & personalization. Building the tech that powers PathZ's intelligence.",
    image: "/professional-woman-engineer.jpg",
  },
  {
    name: "David Rodriguez",
    role: "Career Insights Director",
    bio: "Former HR executive with deep connections in 50+ industries. Curates PathZ's mentor network and career data.",
    image: "/professional-man-director.jpg",
  },
  {
    name: "Emma Thompson",
    role: "Community Manager",
    bio: "Gen Z advocate & community builder. Ensures every user feels supported on their career journey.",
    image: "/professional-woman-community.jpg",
  },
]

export default function About() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-50 text-foreground min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8 md:pt-32 md:pb-8 text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 text-pretty text-slate-900">
          Membantu Gen Z Menemukan Arah <br /> Karier dengan Lebih Pede
        </h1>

        <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Di PathZ, kami percaya kalau kesiapan karier itu bukan soal harus tahu semuanya—tapi soal tahu apa yang harus
          ditanya, ngerti kekuatan diri, dan punya jalur yang jelas buat melangkah ke depan.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-slate-900">Misi Kami</h2>
              <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
                PathZ hadir untuk bantu Gen Z eksplorasi karier tanpa ribet. Kami kasih panduan yang mudah dipahami dan
                personal, supaya kamu bisa nemuin pilihan karier yang cocok dengan passion dan kemampuanmu.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                <span className="text-blue-600 font-semibold">Jelajahi Karier yang Sesuai untuk Anda:</span> Temukan
                jalur karier yang paling cocok dengan keterampilan dan minat Anda, lengkap dengan contoh peran yang
                relevan.
              </p>
            </div>
            {/* Blur separator between text and image */}
            <div className="hidden md:block absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/career-guidance-illustration.jpg" alt="Career guidance" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/learning-pathway-illustration.jpg" alt="Learning pathway" fill className="object-cover" />
            </div>
            {/* Blur separator between image and text */}
            <div className="hidden md:block absolute h-0.5 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-slate-900">Visi Kami</h2>
              <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
                Kami membayangkan dunia di mana setiap anak muda punya akses ke wawasan karier, mentor yang tepat, dan
                tools yang mereka butuhkan untuk berkembang.
              </p>
              <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
                PathZ sedang membangun platform karier generasi baru yang menggabungkan asesmen berbasis AI, mentorship dari para ahli,
                dan jalur pembelajaran yang jelas—membantu Gen Z membuat keputusan karier yang percaya diri sejak hari pertama.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                <span className="text-blue-600 font-semibold">Peta Pembelajaran Anda:</span> Ikuti alur pembelajaran
                terstruktur untuk membangun keterampilan penting dan mencapai tujuan karier Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Temui Tim Kami
          </h2>
          <p className="text-xl text-slate-600">
            Para ahli berpengalaman yang berdedikasi untuk merevolusi eksplorasi karier bagi Gen Z
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* First 3 team members */}
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="group w-full max-w-sm">
              <div className="relative mb-6 h-64 rounded-3xl overflow-hidden bg-white/40 border border-white/30 shadow-lg backdrop-blur-xl transition-all group-hover:shadow-2xl group-hover:scale-105">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/30 transition-all group-hover:shadow-xl">
                <h3 className="text-lg font-bold mb-1 text-slate-900">{member.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Second row with 2 team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-8">
          {teamMembers.slice(3, 5).map((member, index) => (
            <div key={index} className="group w-full max-w-sm">
              <div className="relative mb-6 h-64 rounded-3xl overflow-hidden bg-white/40 border border-white/30 shadow-lg backdrop-blur-xl transition-all group-hover:shadow-2xl group-hover:scale-105">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/30 transition-all group-hover:shadow-xl">
                <h3 className="text-lg font-bold mb-1 text-slate-900">{member.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
