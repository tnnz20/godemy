import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function indexToAlphabet(index: number) {
  const charCodeA = "A".charCodeAt(0)
  return String.fromCharCode(charCodeA + index)
}

export function DecodeJWT(token: string = "") {
  const decodableToken = token.split(".")[1] ?? ""
  const decoded = Buffer.from(decodableToken, "base64").toString()

  return JSON.parse(decoded)
}
