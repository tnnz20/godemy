import { Metadata } from "next"

import RegistrationCard from "./_components/registration-card"

export const metadata: Metadata = {
  title: "Register",
  description: "Register account godemy",
}
export default function RegistrationPage() {
  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <RegistrationCard />
    </div>
  )
}
