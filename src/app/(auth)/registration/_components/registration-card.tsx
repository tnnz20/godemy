"use client"

import Link from "next/link"
import { useRegistrationStore } from "@/store/useRegistrationStore"
import { useShallow } from "zustand/react/shallow"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import RegistrationForm from "./registration-form"

export default function RegistrationCard() {
  const [currentForm] = useRegistrationStore(useShallow((state) => [state.currentForm]))
  return (
    <Card className="mx-auto w-[350px] md:w-[400px]">
      <CardHeader className="flex items-center">
        <CardTitle>Register</CardTitle>
        <CardDescription className="text-center">Daftar sekarang untuk menikmati fitur Godemy.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pb-3">
        <RegistrationForm />
      </CardContent>
      {currentForm == 0 && (
        <CardFooter className="flex justify-center">
          <CardDescription className="">
            Sudah punya akun?{" "}
            <span className="hover:text-foreground hover:underline hover:underline-offset-4">
              <Link href={"/login"}>Masuk sekarang</Link>
            </span>
          </CardDescription>
        </CardFooter>
      )}
    </Card>
  )
}
