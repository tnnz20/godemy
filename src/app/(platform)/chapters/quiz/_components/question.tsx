"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { QuizConfig, QuizItem } from "@/types"

import { cn, indexToAlphabet } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@/app/hooks/useLocalStorage"

type QuestionProps = {
  selectedQuestion: QuizConfig
}

export default function Question({ selectedQuestion }: Readonly<QuestionProps>) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("next_question")) || 1

  const questionItem = selectedQuestion.quizItem[currentPage - 1]

  return (
    <div className="container my-12 max-w-5xl md:ml-12">
      <h3 className="text-base/6">{questionItem.question}</h3>
      <div className="mt-4 flex flex-col gap-2">
        <QuestionOption quizItem={questionItem} currentPage={currentPage} />
      </div>
    </div>
  )
}

function QuestionOption({ quizItem, currentPage }: Readonly<{ quizItem: QuizItem; currentPage: number }>) {
  const [answers, setAnswers] = useLocalStorage("answers", {})

  const [isClicked, setIsClicked] = useState<number | null>(null)
  const answered = answers?.[currentPage]

  const handleClick = (questionItemId: number, item: string, index: number) => {
    setIsClicked(index)
    setAnswers({
      ...answers,
      [questionItemId]: item,
    })
  }
  return (
    <>
      {quizItem?.answers.map((item, index) => (
        <div key={item}>
          <Button
            variant={"ghost"}
            onClick={() => {
              handleClick(quizItem.id, item, index)
            }}
            className={cn("flex h-auto justify-start px-2 transition")}
          >
            <div className="flex items-center gap-1">
              <div
                className={cn("mx-1 flex h-8 w-8 items-center justify-center rounded-full bg-optionCircle transition", {
                  "bg-activeOptionCircle": isClicked == index || answered == item,
                })}
              >
                <p
                  className={cn("font-semibold text-optionAnswer transition", {
                    "text-activeOptionAnswer": isClicked == index || answered == item,
                  })}
                >
                  {indexToAlphabet(index)}
                </p>
              </div>
              <p
                className={cn("ml-2 flex-1 whitespace-normal text-left text-muted-foreground transition", {
                  "text-foreground": isClicked == index || answered == item,
                })}
              >
                {item}
              </p>
            </div>
          </Button>
        </div>
      ))}
    </>
  )
}
