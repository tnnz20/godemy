import React from "react"
import { Metadata } from "next"

import LoginCard from "./_components/login-card"

export const metadata: Metadata = {
  title: "Sign-in",
  description: "Sign-in account godemy",
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <LoginCard />
    </div>
  )
}
