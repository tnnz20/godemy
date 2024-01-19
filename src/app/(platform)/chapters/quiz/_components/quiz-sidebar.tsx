"use client"

import { revalidatePath } from "next/cache"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { QuizConfig } from "@/types"

import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@/app/hooks/useLocalStorage"

import SubmitDialog from "./submit-dialog"

type Props = {
  selectedQuestion: QuizConfig
}

export default function QuizSidebar({ selectedQuestion }: Readonly<Props>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const questions = selectedQuestion.quizItem

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("next_question", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const currentPage = Number(searchParams.get("next_question")) || 1
  const [answers] = useLocalStorage("answers", {})

  const handleNavigate = (id: number) => {
    revalidatePath(createPageURL(id + 1))
  }

  const variantCondition = (id: number) => {
    if (currentPage === id + 1) {
      return "secondary"
    } else if (answers?.hasOwnProperty(String(id + 1))) {
      return "default"
    }
    return "outline"
  }

  return (
    <div className="container block border-l md:h-full md:w-[25%]">
      <div className="my-4 flex flex-col gap-4">
        <div className="my-4 flex flex-wrap justify-start gap-4">
          {questions.length
            ? questions.map((quest, idx) => (
                <div key={quest.id}>
                  <Button variant={variantCondition(idx)} onClick={() => handleNavigate(idx)} asChild>
                    <Link href={createPageURL(idx + 1)}>{idx + 1}</Link>
                  </Button>
                </div>
              ))
            : null}
        </div>
        <div>
          <SubmitDialog variant="default" className="w-full" selectedQuestion={selectedQuestion}>
            Submit
          </SubmitDialog>
        </div>
      </div>
    </div>
  )
}
