import type React from "react"
// <CHANGE> Updated metadata for PathZ website
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PathZ - Gen Z Career Navigator",
  description:
    "Navigate your career path with confidence. Explore careers, take assessments, learn roadmaps, and find mentorship.",
  icons: {
    icon: [
      {
        url: "/path-z.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/path-z.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
