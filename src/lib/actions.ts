"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { BASE_URL } from "@/constants/constants"
import { LoginSchema, RegisterSchema } from "@/validators/auth"

import { LoginState, RegisterState } from "@/types/auth"

export async function signIn(prevState: LoginState, formData: FormData) {
  const validateFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Validations",
    }
  }

  const { email, password } = validateFields.data

  try {
    const response = await fetch(`${BASE_URL}/auth/sign-in`, {
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
        maxAge: 24 * 60 * 60 * 2, // 2 days
      })
    } else if (response.status == 500) {
      return {
        errors: {},
        message: "Invalid",
      }
    } else {
      return {
        errors: {},
        message: "Failed",
      }
    }
  } catch (error) {
    console.error(error)
    return { message: `${error}` }
  }

  revalidatePath("/dashboard")
  redirect("/dashboard")
}

export async function signUp(prevState: RegisterState, formData: FormData) {
  const validateFields = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    gender: formData.get("gender"),
    role: formData.get("role"),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Validations",
    }
  }

  const { name, email, password, gender, role } = validateFields.data

  try {
    const response = await fetch(`${BASE_URL}/user/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, gender, role }),
    })

    const data = await response.json()
    console.log(response)
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
    } else if (response.status == 409) {
      return {
        errors: {},
        message: "Already",
      }
    } else {
      return {
        errors: {},
        message: "Failed",
      }
    }
  } catch (error) {
    return { message: `${error}` }
  }
  revalidatePath("/login")
  redirect("/login")
}
