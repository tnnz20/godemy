import Link from "next/link"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FormLogin } from "@/app/(auth)/login/_components/login-form"

export default function LoginCard() {
  return (
    <Card className="mx-auto w-[350px] md:w-[400px]">
      <CardHeader className="flex items-center">
        <CardTitle>Masuk</CardTitle>
        <CardDescription className="text-center">Masukan email dan password yang sudah terdaftar.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pb-3">
        <FormLogin />
      </CardContent>
      <CardFooter className="flex justify-center">
        <CardDescription className="">
          Belum punya akun?{" "}
          <span className="hover:text-foreground hover:underline hover:underline-offset-4">
            <Link href={"/registration"}>Daftar sekarang</Link>
          </span>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
