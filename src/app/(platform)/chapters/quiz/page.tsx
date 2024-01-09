"use client"

import { useEffect, useState } from "react"
import { Metadata } from "next"

import { QuizChapter1 } from "@/config/quiz"
import { indexToAlphabet } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import TimeCountDown from "./_components/timecountdown"

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: "Kuis " + QuizChapter1.category,
//     description: "Halaman kuis Godemy.",
//   }
// }

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(4)

  const question = QuizChapter1
  const questionItem = question.quizItem[currentQuestion]

  return (
    <main className="flex h-screen flex-col justify-center">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-end p-2 md:justify-between">
        <h1 className="hidden text-xl md:block">Kategori: {QuizChapter1.category}</h1>
        <div className="mr-5 border p-3">
          <TimeCountDown limit={600000} />
        </div>
      </div>
      <div className="flex h-screen border">
        <div className="container my-12 ml-12 max-w-5xl">
          <h3>{questionItem?.question}</h3>
          <div className="mt-4 flex flex-col gap-2">
            {questionItem?.answers.map((item) => (
              <div className="" key={questionItem.id}>
                <Button variant={"ghost"}>{item}</Button>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden h-full w-[30%] border-l md:block">
          <div className="mx-8 my-4 flex flex-wrap justify-start gap-4">
            {question.quizItem.length
              ? question.quizItem.map((_, idx) => (
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
