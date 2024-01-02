import React from "react"
import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import LoginCard from "./_components/login-card"

export const metadata: Metadata = {
  title: "Sign-in",
  description: "Sign-in account godemy",
}
type Props = {}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Button variant={"ghost"} asChild>
        <Link href="/" className="absolute left-4 top-2 md:left-8 md:top-4">
          <Icons.ChevronLeft className="mr-2 h-4 w-4"></Icons.ChevronLeft>
          Back
        </Link>
      </Button>
      <LoginCard />
    </div>
  )
}
