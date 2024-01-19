"use client"

import { useState } from "react"
import { revalidatePath } from "next/cache"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { QuizConfig, QuizItem } from "@/types"

import { cn, indexToAlphabet } from "@/lib/utils"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import SubmitDialog from "./submit-dialog"

type QuestionProps = {
  selectedQuestion: QuizConfig
}

export default function Question({ selectedQuestion }: Readonly<QuestionProps>) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("next_question")) || 1

  const questionItem = selectedQuestion.quizItem[currentPage - 1]
  const pathname = usePathname()
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("next_question", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const handlePager = (id: number) => {
    revalidatePath(createPageURL(id))
  }

  const { prev, next } = QuestionPager(selectedQuestion.quizItem, currentPage)

  return (
    <div className="container my-12 max-w-5xl md:ml-12">
      <div className="flex flex-col gap-2">
        <h3 className="text-base/6">{questionItem.question}</h3>
        <div className="mt-4 flex flex-col gap-2">
          <QuestionOption quizItem={questionItem} currentPage={currentPage} />
        </div>
      </div>

      <div className={cn("mt-6 flex h-11 w-full items-center justify-between", { "justify-end": !prev })}>
        {prev && (
          <Button
            variant={"ghost"}
            className={cn("flex items-center gap-2 px-2")}
            onClick={() => handlePager(questionItem.id)}
            asChild
          >
            <Link href={createPageURL(currentPage - 1)}>
              <Icons.ChevronLeft />
              <p>Kembali</p>
            </Link>
          </Button>
        )}
        {next ? (
          <Button
            variant={"ghost"}
            className={cn("flex items-center gap-2  px-4")}
            onClick={() => handlePager(questionItem.id)}
            asChild
          >
            <Link href={createPageURL(currentPage + 1)}>
              <p>Selanjutnya</p>
              <Icons.ChevronRight />
            </Link>
          </Button>
        ) : (
          <SubmitDialog
            variant="destructive"
            className="flex items-center gap-2 px-4 font-bold"
            selectedQuestion={selectedQuestion}
          >
            Submit
          </SubmitDialog>
        )}
      </div>
    </div>
  )
}

function QuestionPager(quizItem: QuizItem[], currentPage: number) {
  const prev = currentPage !== 1 ? quizItem[currentPage - 2] : null
  const next = currentPage !== quizItem.length ? quizItem[currentPage] : null

  return {
    prev,
    next,
  }
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
            type="button"
            className={cn("flex h-auto w-full justify-start px-2 transition")}
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
