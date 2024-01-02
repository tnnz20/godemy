"use client"

import Link from "next/link"
import { useFormState } from "react-dom"

import { signIn } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginCard() {
  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(signIn, initialState)
  // console.log(state)

  return (
    <Card className="mx-auto w-[350px] md:w-[400px]">
      <CardHeader className="flex items-center">
        <CardTitle>Masuk</CardTitle>
        <CardDescription className="text-center">Masukan email dan password yang sudah terdaftar.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pb-3">
        <form action={dispatch}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="godemy@example.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" placeholder="Password email anda" type="password" />
            </div>
          </div>
          <div className="mt-10">
            <Button className="w-full">Masuk</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="/" className="">
          <CardDescription className="hover:text-brand underline underline-offset-4">
            Belum punya akun? Daftar sekarang
          </CardDescription>
        </Link>
      </CardFooter>
    </Card>
  )
}
