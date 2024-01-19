"use server"

import { cookies } from "next/headers"
import { LoginSchema, RegisterSchema } from "@/validators/auth"

import { LoginState } from "@/types/auth"

export async function signIn(prevState: LoginState, formData: FormData) {
  const validateFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Gagal masuk!. Ada field yang belum terpenuhi.",
    }
  }

  const { email, password } = validateFields.data

  try {
    const response = await fetch(`${process.env.BASE_DIR}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (response.ok) {
      const token = data.data.access_token
      cookies().set({
        name: "token",
        secure: true,
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60,
      })
    } else {
      return {
        errors: "",
        message: "Email tidak terdaftar.",
      }
    }
  } catch (error) {
    console.error(error)
  }
}
