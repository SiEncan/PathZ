"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TestCard } from "@/components/test-card"

export default function Assessment() {
  const [currentStep] = useState(0)

  const tests = [
    {
      icon: "🎯",
      title: "Career Interest Test",
      description:
        "Discover which careers align with your interests and passions. This test explores your preferences across different industries and roles.",
      duration: "15-20 min",
      questions: 40,
    },
    {
      icon: "💻",
      title: "Digital Readiness Test",
      description:
        "Evaluate your digital skills and tech proficiency. Find out where you stand with in-demand technical competencies for modern careers.",
      duration: "10-15 min",
      questions: 30,
    },
    {
      icon: "🧠",
      title: "Work Personality Test",
      description:
        "Understand your working style, communication preferences, and team dynamics. Learn how you naturally contribute in professional environments.",
      duration: "12-18 min",
      questions: 35,
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="space-y-4 mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Career Assessment Tests</h1>
              <p className="md:text-lg text-muted-foreground max-w-2xl">
                Take our comprehensive tests to discover your career path, assess your skills, and understand your work
                personality. Each test takes just 10-20 minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {tests.map((test, index) => (
                <TestCard
                  key={index}
                  icon={test.icon}
                  title={test.title}
                  description={test.description}
                  duration={test.duration}
                  questions={test.questions}
                  onStart={() => console.log(`Starting ${test.title}`)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
