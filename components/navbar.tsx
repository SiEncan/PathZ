"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation";
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/assessment", label: "Assessment" },
  { href: "/career-explorer", label: "Career Explorer" },
  { href: "/learning-roadmap", label: "Learning Roadmap" },
  { href: "/cv-tools", label: "CV & Tools" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  return (
    <nav className="border-b border-blue-200/50 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-10 md:w-40 md:h-12">
              <Image
                src="/path-z.png"
                alt="PathZ Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300
                    ${isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-muted-foreground hover:text-blue-600 hover:bg-blue-50"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-blue-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
