import { useCallback, useEffect, useState } from "react"

export const useLocalStorage = (key: string, initialValue: any) => {
  const initialize = (key: string) => {
    try {
      const item = localStorage.getItem(key)
      if (item && item !== "undefined") {
        return JSON.parse(item)
      }

      localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue
    } catch {
      return initialValue
    }
  }

  const [state, setState] = useState<any>(null)

  useEffect(() => {
    setState(initialize(key))
  }, [])

  const setValue = useCallback(
    (value: any) => {
      try {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.log(error)
      }
    },
    [key, setState]
  )

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key)
    } catch {
      console.log("Error")
    }
  }, [key])

  return [state, setValue, remove]
}
