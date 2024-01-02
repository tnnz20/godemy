"use server"

import { z } from "zod"

const LoginSchema = z.object({
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
      message: "Ada field yang belum terisi. Gagal masuk!.",
    }
  }

  console.log(validateFields.data)

  const { email, password } = validateFields.data
  console.log(email)
  console.log(password)

  // const response = await fetch()
}
