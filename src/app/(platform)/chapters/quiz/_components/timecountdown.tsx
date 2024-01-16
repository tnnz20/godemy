"use client"

import { useEffect, useState } from "react"

type Props = {
  limit: number
}

export function TimeCountDown(props: Readonly<Props>) {
  const targetTime = new Date().getTime() + props.limit

  const calculateTimeRemaining = () => {
    const now = new Date().getTime()
    const difference = targetTime - now

    if (difference <= 0) {
      // Countdown has reached zero
      return { minutes: 0, seconds: 0 }
    }

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { minutes, seconds }
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <p className="text-destructive">
      {timeRemaining.minutes < 10 ? "0" : ""}
      {timeRemaining.minutes}:{timeRemaining.seconds < 10 ? "0" : ""}
      {timeRemaining.seconds}
    </p>
  )
}
