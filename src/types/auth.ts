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

export type ButtonFormAuth = {
  pending: boolean
}
