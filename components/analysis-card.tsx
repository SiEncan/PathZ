"use client"

import { CheckCircle, AlertCircle } from "lucide-react"

export default function AnalysisCard() {
  return (
    <div className="w-full bg-white border border-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
      <h2 className="text-xl font-bold text-blue-900 mb-8">CV Analysis</h2>

      {/* Score */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-900/80">Overall Score</span>
          <span className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            85/100
          </span>
        </div>

        <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
          <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Positive */}
      <div className="space-y-3 mb-8">
        {[
          "Strong action verbs used throughout",
          "Good use of quantifiable achievements",
        ].map((text, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-2 bg-emerald-50/70 border-emerald-200
                      flex gap-3 shadow-sm hover:shadow-md transition-all duration-300 
                      hover:-translate-y-1 hover:border-emerald-300"
          >
            <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
            <p className="text-sm md:text-base text-emerald-700">{text}</p>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="space-y-3 mb-8">
        {[
          "Consider adding more technical skills",
          "Summary section could be more concise",
        ].map((text, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-2 bg-amber-50/70 border-amber-200
                      flex gap-3 shadow-sm hover:shadow-md transition-all duration-300 
                      hover:-translate-y-1 hover:border-amber-300"
          >
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <p className="text-sm md:text-base text-amber-900">{text}</p>
          </div>
        ))}
      </div>


      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md">
        Get Detailed Report
      </button>
    </div>
  )
}
