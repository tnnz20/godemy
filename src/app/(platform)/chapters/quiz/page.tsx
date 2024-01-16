"use client"

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: "Kuis " + QuizChapter1.category,
//     description: "Halaman kuis Godemy.",
//   }
// }

// import { Metadata } from "next"
import { useCallback, useEffect, useState } from "react"

import { QuizChapter } from "@/config/quiz"
// import { indexToAlphabet } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { TimeCountDown } from "./_components/timecountdown"

const useLocalStorage = (key: string, initialValue: any) => {
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

  const [state, setState] = useState<any>(null) // problem is here

  // solution is here....
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
      console.log("xxx")
    }
  }, [key])

  return [state, setValue, remove]
}

export default function QuizPage() {
  const [answers, setAnswers] = useLocalStorage("answers", {})

  const [currentQuestion, setCurrentQuestion] = useState(4)
  const question = QuizChapter
  const selectedQuestion = question[0]
  const questionItem = selectedQuestion.quizItem[currentQuestion]

  return (
    <main className="flex h-screen flex-col justify-center">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-end p-2 md:justify-between">
        <h1 className="hidden text-xl md:block">Kategori: {selectedQuestion.category}</h1>
        <div className="mr-5 border p-3">
          <TimeCountDown limit={600000} />
        </div>
      </div>
      <div className="flex h-screen border">
        <div className="container my-12 ml-12 max-w-5xl">
          <h3>{questionItem?.question}</h3>
          <div className="mt-4 flex flex-col gap-2">
            {questionItem?.answers.map((item) => (
              <div className="" key={item}>
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    setAnswers({
                      ...answers,
                      [questionItem.id]: item,
                    })
                  }}
                >
                  {item}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden h-full w-[30%] border-l md:block">
          <div className="mx-8 my-4 flex flex-wrap justify-start gap-4">
            {selectedQuestion.quizItem.length
              ? selectedQuestion.quizItem.map((_, idx) => (
                  <div key={idx}>
                    <Button>{idx + 1}</Button>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </main>
  )
}
