"use client"

import { revalidatePath } from "next/cache"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { QuizItem } from "@/types"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@/app/hooks/useLocalStorage"

type Props = {
  questions: QuizItem[]
}

export default function QuizSidebar({ questions }: Readonly<Props>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("next_question", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }
  const [answers] = useLocalStorage("answers", {})

  const handleNavigate = (id: number) => {
    revalidatePath(createPageURL(id + 1))
  }

  return (
    <div className="container hidden h-full w-[25%] border-l md:block">
      <div className="my-4 flex flex-col gap-4">
        <div className=" my-4 flex flex-wrap justify-start gap-4">
          {questions.length
            ? questions.map((quest, idx) => (
                <div key={quest.id}>
                  <Button
                    variant={!answers?.hasOwnProperty(String(idx + 1)) ? "outline" : "default"}
                    onClick={() => handleNavigate(idx)}
                    asChild
                  >
                    <Link href={createPageURL(idx + 1)}>{idx + 1}</Link>
                  </Button>
                </div>
              ))
            : null}
        </div>
        <div>
          <Button className={cn("w-full")}>Submit</Button>
        </div>
      </div>
    </div>
  )
}
