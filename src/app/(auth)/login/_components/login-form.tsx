"use client"

import { useFormState } from "react-dom"

import { signIn } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function SubmitLogin() {
  return (
    <Button className="w-full" type="submit">
      Masuk
    </Button>
  )
}

const initialState = { errors: {}, message: null }

export function FormLogin() {
  const [state, dispatch] = useFormState(signIn, initialState as any)
  return (
    <form action={dispatch}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="godemy@example.com" />
          {state?.errors.email ? (
            <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.email.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" placeholder="Password email anda" type="password" />
          {state?.errors.password ? (
            <div id="customer-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.password.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-10">
        <SubmitLogin />
        {state?.message ? (
          <div aria-live="polite" className="mt-2 text-sm text-red-500">
            {state.message}
          </div>
        ) : null}
      </div>
    </form>
  )
}
