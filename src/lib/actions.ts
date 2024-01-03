"use server"

import { cookies } from "next/headers"
import { z } from "zod"

const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error:
        "Invalid email: mohon masukan format email yang benar.",
    })
    .email(),
  password: z.string().min(6, {
    message: "Invalid password: password minimal 6 karakter.",
  }),
})

const RegisterSchema = z.object({
  email: z
    .string({
      invalid_type_error:
        "Invalid email: mohon masukan format email yang benar.",
    })
    .email(),
  password: z
    .string({
      invalid_type_error: "Invalid password: password minimal 6 karakter.",
    })
    .min(6),
  name: z
    .string({
      invalid_type_error:
        "Invalid name: mohon masukan nama lebih dari 4 karakter",
    })
    .min(4),
  gender: z.enum(["Laki-Laki", "Perempuan"], {
    invalid_type_error:
      "Invalid gender: pilih salah satu dari gender yang tersedia.",
  }),
})

export type RegisterState = {
  errors?: {
    email?: string[]
    password?: string[]
    name?: string[]
    gender?: string[]
    status?: string[]
  }
  message?: string | null
}

export type LoginState = {
  errors?: {
    email?: string[]
    password?: string[]
  }
  message?: string | null
}

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
