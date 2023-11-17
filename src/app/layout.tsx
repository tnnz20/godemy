import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

import { siteConfig } from "../config/site"

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
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
