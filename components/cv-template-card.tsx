"use client"

import { ArrowRight } from "lucide-react"

export function CVTemplateCard({
  name,
  description,
  icon,
}: {
  name: string
  description: string
  icon: string
}) {
  return (
    <div className="w-full h-full group border border-blue-200 rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
      <div className="text-4xl sm:text-5xl mb-4 transition-transform duration-300 leading-none">
        {icon}
      </div>

      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
        {name}
      </h3>

      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group/btn transform hover:scale-105">
        Use Template
        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}
