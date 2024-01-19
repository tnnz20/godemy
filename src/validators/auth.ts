import { z } from "zod"

export const LoginSchema = z.object({
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

export const RegisterSchema = z.object({
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
