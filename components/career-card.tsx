"use client"

import { useState } from "react"
import { CareerModal } from "./career-modal"
import { ArrowRight } from "lucide-react"

interface CareerCardProps {
  id: string
  title: string
  description: string
  icon: string
}

export function CareerCard({ id, title, description, icon }: CareerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="
          w-full text-left bg-white 
          border border-blue-200 rounded-2xl p-6 
          hover:border-blue-400 
          hover:shadow-[0_10px_25px_rgba(56,189,248,0.25)]
          transition-all duration-300 transform hover:-translate-y-1 
          group overflow-hidden relative
        "
      >
        {/* Hover overlay biru */}
        <div className="
          absolute inset-0 opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-300 
          bg-gradient-to-br from-sky-400/10 to-blue-500/10
        "></div>

        {/* Content */}
        <div className="relative flex items-start gap-4">
          <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
            {icon}
          </div>

          <div className="flex-1">
            <h3
              className="
                font-bold text-lg md:text-xl text-foreground mb-2 
                group-hover:text-blue-600 transition-colors
              "
            >
              {title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <ArrowRight
            size={20}
            className="
              text-blue-600 opacity-0 
              group-hover:opacity-100 
              transition-opacity transform 
              group-hover:translate-x-1
            "
          />
        </div>
      </button>

      {isModalOpen && (
        <CareerModal careerTitle={title} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}