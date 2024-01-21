"use client"

import { useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRegistrationStore } from "@/store/useRegistrationStore"
import { useFormState, useFormStatus } from "react-dom"
import { useShallow } from "zustand/react/shallow"

import { ButtonFormAuth, RegisterState } from "@/types/auth"
import { signUp } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export default function RegistrationForm() {
  const [currentForm] = useRegistrationStore(useShallow((state) => [state.currentForm]))

  return (
    <>
      {currentForm === 0 && <RoleForm />}
      {currentForm === 1 && <AuthForm />}
    </>
  )
}

type RoleOptions = {
  role: string
}

const roles: RoleOptions[] = [{ role: "Siswa" }, { role: "Guru" }]

function RoleForm() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [setCurrentForm] = useRegistrationStore(useShallow((state) => [state.setCurrentForm]))

  const handleClick = (role: string) => {
    const params = new URLSearchParams(searchParams)
    if (role === "Guru") {
      params.set("role", "teacher")
    } else {
      params.delete("role")
    }
    replace(`${pathname}?${params}`)
    setCurrentForm(1)
  }

  return (
    <div className="flex w-full flex-col gap-4 p-6 pb-3 ">
      <h4 className="flex items-center justify-center font-semibold">Pilih role untuk akun anda</h4>
      <div className="flex justify-center gap-2">
        {roles.map((item) => (
          <Button
            className="h-32 w-32 text-muted-foreground hover:text-foreground"
            variant={"outline"}
            onClick={() => handleClick(item.role)}
            key={item.role}
          >
            <div className="flex flex-col items-center gap-4 ">
              {item.role === "Siswa" && <Icons.User className="h-8 w-8" />}
              {item.role === "Guru" && <Icons.GraduationCap className="h-8 w-8" />}
              <p>{item.role}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

function AuthForm() {
  const searchParams = useSearchParams()
  const role = searchParams.get("role") ?? "student"

  const initialState: RegisterState = { errors: {}, message: null }
  const [state, dispatch] = useFormState(signUp, initialState as any)

  const { toast } = useToast()
  const { pending } = useFormStatus()

  const errorDescription: { [key: string]: string } = {
    Failed: "Kesalahan server.",
    Already: "Email sudah terdaftar.",
    Validations: "Ada field yang belum terpenuhi.",
  }

  useEffect(() => {
    const stateMessage: string = String(state?.message)
    if (state?.message !== null) {
      toast({
        variant: "destructive",
        title: "Kesalahan Saat Login!",
        description: errorDescription[stateMessage] || state?.message,
      })
    }
  }, [state, toast])

  return (
    <form action={dispatch}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name" className={cn({ "text-destructive": state?.errors.name })}>
            Nama Lengkap
          </Label>
          <Input id="name" name="name" placeholder="Nama Lengkap" />
          {state?.errors.name ? (
            <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-destructive">
              {state.errors.name.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email" className={cn({ "text-destructive": state?.errors.email })}>
            Email
          </Label>
          <Input id="email" name="email" placeholder="godemy@example.com" />
          {state?.errors.email ? (
            <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-destructive">
              {state.errors.email.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password" className={cn({ "text-destructive": state?.errors.password })}>
            Password
          </Label>
          <Input id="password" name="password" placeholder="Password email anda" type="password" />
          {state?.errors.password ? (
            <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-destructive">
              {state.errors.password.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="gender" className={cn({ "text-destructive": state?.errors.gender })}>
            Jenis Kelamin
          </Label>
          <Select name="gender">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih jenis kelamin" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Jenis Kelamin</SelectLabel>
                <SelectItem value="Laki-Laki">Laki-Laki</SelectItem>
                <SelectItem value="Perempuan">Perempuan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {state?.errors.gender ? (
            <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-destructive">
              {state.errors.gender.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <Input id="role" name="role" className="hidden" value={role} />
      </div>
      <div className="mb-4 mt-8">
        <ButtonForm pending={pending} />
      </div>
    </form>
  )
}

function ButtonForm({ pending }: Readonly<ButtonFormAuth>) {
  const [setCurrentForm] = useRegistrationStore(useShallow((state) => [state.setCurrentForm]))

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const { replace } = useRouter()

  const handleBack = () => {
    const params = new URLSearchParams(searchParams)
    params.delete("role")
    replace(`${pathname}?${params}`)
    setCurrentForm(0)
  }
  return (
    <div className="flex items-center justify-between">
      <Button type="button" className="flex gap-2" variant={"ghost"} onClick={() => handleBack()} disabled={pending}>
        <Icons.ArrowLeft className="h-4 w-4" />
        <p>Kembali</p>
      </Button>
      <Button type="submit" disabled={pending}>
        {!pending ? "Daftar" : "Sedang di proses..."}
      </Button>
    </div>
  )
}
