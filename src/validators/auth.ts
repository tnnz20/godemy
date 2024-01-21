import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Mohon masukan format email yang benar.",
  }),
  password: z.string().min(6, {
    message: "Password minimal 6 karakter.",
  }),
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Mohon masukan format email yang benar.",
  }),
  password: z.string().min(6, {
    message: "Password minimal 6 karakter.",
  }),
  name: z
    .string()
    .min(4, { message: "Mohon masukan nama lebih dari 4 karakter." }),
  gender: z.enum(["Laki-Laki", "Perempuan"], {
    errorMap: (issue, _ctx) => {
      switch (issue.code) {
        case "invalid_enum_value":
          return { message: "Mohon pilih salah satu jenis kelamin." }
      }
    },
  }),
  role: z.enum(["teacher", "student"]),
})
