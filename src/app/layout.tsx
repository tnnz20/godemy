import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Gozy Learning",
  description: "Gozy Learning is a platform for learning and teaching programming languages.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background antialiased", inter.variable, fontHeading.variable)}>
        {children}
      </body>
    </html>
  )
}
