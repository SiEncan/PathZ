import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About PathZ</h1>
            <p className="text-lg text-muted-foreground">
              Empowering Gen Z to navigate their career with confidence and clarity.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Mission</h2>
            <div className="bg-background border border-border rounded-lg p-8 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                PathZ exists to demystify career exploration for Gen Z. We believe that career readiness isn't about
                having all the answers—it's about asking the right questions, understanding your strengths, and having a
                clear roadmap to get there. Our mission is to provide accessible, personalized guidance that helps young
                professionals discover fulfilling careers aligned with their passions and skills.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Vision</h2>
            <div className="bg-background border border-border rounded-lg p-8 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where every young professional has access to career intelligence, mentorship, and
                tools they need to succeed. PathZ is building the next-generation career platform that combines
                AI-powered assessments, expert mentorship, and actionable learning pathways—empowering Gen Z to make
                confident career decisions from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Why PathZ for Gen Z Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why PathZ for Gen Z</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Personalized Guidance</h3>
                <p className="text-muted-foreground">
                  Get career recommendations based on your unique skills, interests, and values—not outdated career
                  tests.
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Practical Skills</h3>
                <p className="text-muted-foreground">
                  Learn the digital and soft skills that employers actually demand, with curated learning paths for
                  every career.
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Expert Mentorship</h3>
                <p className="text-muted-foreground">
                  Connect directly with professionals who have walked the path and can share real insights and
                  opportunities.
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Job Ready Tools</h3>
                <p className="text-muted-foreground">
                  Build your CV, practice interviews, and discover opportunities—all in one platform designed for your
                  success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
