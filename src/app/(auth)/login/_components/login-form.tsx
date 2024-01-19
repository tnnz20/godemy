"use client"

import { useEffect } from "react"
import { useFormState, useFormStatus } from "react-dom"

import { LoginState } from "@/types/auth"
import { signIn } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const initialState: LoginState = { errors: {}, message: null }

export function FormLogin() {
  const [state, dispatch] = useFormState(signIn, initialState as any)
  const { toast } = useToast()
  const { pending } = useFormStatus()

  const errorDescription: { [key: string]: string } = {
    Failed: "Email Tidak Terdaftar.",
    Invalid: "Password Salah.",
    Validations: "Ada field yang belum terpenuhi.",
  }
  // TODO: BUG TOAST
  useEffect(() => {
    const stateMessage: string = String(state?.message)
    if (state?.message !== null) {
      toast({
        variant: "destructive",
        title: "Kesalahan Saat Login!",
        description: errorDescription[stateMessage],
      })
    }
  }, [state, toast])

  return (
    <form action={dispatch}>
      <div className="grid w-full items-center gap-4">
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
      </div>
      <div className="mt-10">
        <SubmitLogin pending={pending} />
      </div>
    </form>
  )
}
type SubmitLoginProps = {
  pending: boolean
}
function SubmitLogin({ pending }: Readonly<SubmitLoginProps>) {
  return (
    <Button className="w-full" type="submit" aria-disabled={pending}>
      Masuk
    </Button>
  )
}
