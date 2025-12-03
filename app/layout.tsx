import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> SEO-optimized metadata for Clarity AI
export const metadata: Metadata = {
  title: "Clarity | AI-Powered Writing Assistant",
  description:
    "Write better, faster, and with confidence. Clarity is an AI writing assistant that helps you create compelling content, improve your prose, and communicate with impact.",
  keywords: ["AI writing", "writing assistant", "content creation", "copywriting", "AI editor"],
  authors: [{ name: "Clarity" }],
  openGraph: {
    title: "Clarity | AI-Powered Writing Assistant",
    description: "Write better, faster, and with confidence. Your AI writing companion for impactful content.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarity | AI-Powered Writing Assistant",
    description: "Write better, faster, and with confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
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
