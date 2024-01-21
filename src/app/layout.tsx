import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"

import { RootConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme.provider"

import "@/styles/globals.css"

import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fontHeading = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

const fontLogo = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-logo",
})

export const metadata: Metadata = {
  title: {
    default: RootConfig.name,
    template: `%s | ${RootConfig.name}`,
  },
  description: RootConfig.description,
  icons: [
    {
      url: "/Icon.svg",
    },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.variable,
          fontHeading.variable,
          fontLogo.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
