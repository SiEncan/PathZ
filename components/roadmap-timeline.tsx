import { CheckCircle2 } from "lucide-react"

export function RoadmapTimeline() {
  const roadmaps = [
    {
      title: "Digital Essential Skills",
      steps: [
        {
          title: "Master Office Productivity",
          description: "Excel, Google Workspace, presentation tools - essential for any role.",
        },
        {
          title: "Learn Communication Tools",
          description: "Slack, Teams, email etiquette - collaborate effectively with remote teams.",
        },
        {
          title: "Understand Cloud Basics",
          description: "Google Drive, OneDrive, cloud storage security and collaboration.",
        },
        {
          title: "Cybersecurity Awareness",
          description: "Password management, phishing detection, data protection basics.",
        },
      ],
    },
    {
      title: "Soft Skills for Gen Z",
      steps: [
        {
          title: "Emotional Intelligence",
          description: "Self-awareness, empathy, and managing emotions in workplace.",
        },
        {
          title: "Communication & Presentation",
          description: "Write clearly, speak confidently, and present your ideas effectively.",
        },
        {
          title: "Collaboration & Teamwork",
          description: "Work across functions, resolve conflicts, and build strong relationships.",
        },
        {
          title: "Adaptability & Growth Mindset",
          description: "Embrace change, learn continuously, and bounce back from setbacks.",
        },
      ],
    },
    {
      title: "Career Path: Tech to PM",
      steps: [
        {
          title: "Year 1: Engineering Foundation",
          description: "Start as junior engineer, learn codebase, understand product from technical perspective.",
        },
        {
          title: "Year 2-3: Ownership & Impact",
          description: "Take on larger projects, influence product decisions, mentor junior team members.",
        },
        {
          title: "Year 3-4: Transition to PM",
          description: "Move into Associate PM role, lead cross-functional initiatives, build strategy skills.",
        },
        {
          title: "Year 5+: Senior PM",
          description: "Own major product lines, define strategy, drive company goals and vision.",
        },
      ],
    },
  ]

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
