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
  title: "Godemy",
  description:
    "Godemy is a place where you can elevate your programming skills to the next level, with a particular focus on mastering Golang. Our platform is designed to provide expert guidance, guiding you through every aspect of Golang attentively. Join now and gain your Golang skills in Godemy!",
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
