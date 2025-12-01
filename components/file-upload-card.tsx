"use client"

import { Upload } from "lucide-react"
import { useState } from "react"

export default function FileUploadCard() {
  const [isDragActive, setIsDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(e.type === "dragenter" || e.type === "dragover")
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)
  }

  return (
    <div className="w-full bg-white border border-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
      <h2 className="text-xl font-bold text-blue-900 mb-6">Upload Your CV</h2>

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`rounded-xl p-10 text-center border-2 border-dashed transition-all duration-300 ${
          isDragActive
            ? "border-blue-400 bg-blue-50"
            : "border-blue-200 hover:border-blue-300 bg-blue-50/40"
        }`}
      >
        <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />

        <p className="text-blue-900 font-medium">Drag & drop your CV here</p>
        <p className="text-blue-700 text-sm mb-6">or click to browse</p>

        <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-semibold py-2.5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md">
          Choose File
        </button>
      </div>

      <p className="text-sm text-blue-700/70 mt-6">
        Supported formats: PDF, DOC, DOCX (Max 5MB)
      </p>
    </div>
  )
}
