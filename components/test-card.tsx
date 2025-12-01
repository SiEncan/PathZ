"use client"

import { Clock, HelpCircle, ArrowRight } from "lucide-react"

interface TestCardProps {
  icon: string
  title: string
  description: string
  duration: string
  questions: number
  onStart: () => void
}

export function TestCard({
  icon,
  title,
  description,
  duration,
  questions,
  onStart,
}: TestCardProps) {
  return (
    <div
      className="
        group relative bg-white rounded-2xl overflow-hidden 
        transition-all duration-300 border border-blue-100
        hover:border-blue-300 
        hover:-translate-y-2 
        hover:shadow-[0_12px_30px_rgba(56,189,248,0.25)]
      "
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-sky-400/5 to-blue-500/5"></div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-sky-50 to-blue-50 p-6 sm:p-8 flex items-center gap-4 border-b border-blue-100">
        <span className="text-4xl sm:text-6xl">{icon}</span>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="relative p-6 sm:p-8 space-y-4 md:space-y-6">
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 py-6 border-t border-b border-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Clock size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Durasi</p>
              <p className="font-semibold text-foreground">{duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
              <HelpCircle size={20} className="text-sky-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Pertanyaan</p>
              <p className="font-semibold text-foreground">{questions}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onStart}
          className="
            w-full py-3 md:py-4 px-6 
            bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 
            text-white rounded-xl font-semibold 
            hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] 
            transition-all duration-300 transform hover:scale-105 
            flex items-center justify-center gap-2 group/btn
          "
        >
          Mulai Tes
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
