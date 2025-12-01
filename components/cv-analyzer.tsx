"use client"

import { useState } from "react"

export function CVAnalyzer() {
  const [scores] = useState({
    formatting: 85,
    content: 72,
    keywords: 68,
    atsOptimized: 78,
  })

  return (
    <div className="bg-background border border-border rounded-lg p-8">
      <h3 className="text-2xl font-bold text-foreground mb-6">CV Analyzer</h3>
      <div className="space-y-4">
        {Object.entries(scores).map(([key, score]) => (
          <div key={key}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold text-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
              <span className="text-sm font-bold text-primary">{score}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${score}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 bg-primary text-primary-foreground py-2 px-4 rounded font-semibold hover:bg-primary/90 transition-colors">
        Analyze My CV
      </button>
    </div>
  )
}
