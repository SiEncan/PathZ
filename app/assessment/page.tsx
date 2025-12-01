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

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-4 mb-16">
              <h1 className="text-4xl font-bold text-foreground">Career Assessment Tests</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
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
