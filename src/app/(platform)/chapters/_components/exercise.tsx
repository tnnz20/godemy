"use client"

import React from "react"
import { useExerciseStore } from "@/store/useExerciseStore"
import { useShallow } from "zustand/react/shallow"

import { cn, indexToAlphabet } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

interface CardExerciseProps {
  answers: string[]
  correctAnswer: string
  explanation: string
  hint: string
  question: string
  subQuestion: string
  isCode: boolean
}

export function Exercise(props: Readonly<CardExerciseProps>) {
  const { answers, correctAnswer, explanation, hint, question, isCode, subQuestion } = props
  return (
    <div className="mt-4 flex h-auto max-w-5xl flex-col items-center justify-center md:mx-28">
      <div className="my-4 flex flex-col items-center gap-2">
        <div className="flex items-center justify-center rounded-full bg-[#0072F5] p-2">
          <Icons.HelpCircle className="h-10 w-10 stroke-background stroke-[1.5]" />
        </div>
        <p className="text-lg">Waktunya untuk latihan soal!</p>
        <p className="text-pretty text-center text-sm text-slate-500">
          Uji Pengetahuan anda dan lihat apa saja ilmu yang telah anda pelajari.
        </p>
      </div>
      <CardExercise
        answers={answers}
        correctAnswer={correctAnswer}
        explanation={explanation}
        hint={hint}
        question={question}
        isCode={isCode}
        subQuestion={subQuestion}
      />
    </div>
  )
}

function CardExercise(props: Readonly<CardExerciseProps>) {
  const [answer, status, setStatus] = useExerciseStore(
    useShallow((state) => [state.answer, state.status, state.setStatus])
  )

  const handleCheck = (correctAnswer: string) => {
    if (answer === correctAnswer) {
      setStatus("correct")
    } else {
      setStatus("incorrect")
    }
  }

  return (
    <Card className="mx-10 my-4 w-3/4 rounded-lg">
      <CardHeader className="">
        {props.isCode ? (
          <CardTitle className="text-md flex flex-col font-normal">
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border px-2 py-4">{props.question}</pre>
            <p>{props.subQuestion}</p>
          </CardTitle>
        ) : (
          <CardTitle className="text-md text-center font-normal">{props.question}</CardTitle>
        )}
        <CardDescription className="text-center text-sm">Pilih salah satu jawaban di bawah!</CardDescription>
      </CardHeader>

      <Card className="mx-4 rounded-lg">
        {status == "idle" ? (
          <ExerciseOption answers={props.answers} />
        ) : (
          <ExerciseResult answers={props.answers} hint={props.hint} explanation={props.explanation} />
        )}
      </Card>
      {status == "idle" && (
        <CardFooter className="flex justify-end py-2">
          <Button className="my-2 w-full md:w-auto" onClick={() => handleCheck(props.correctAnswer)}>
            Cek Jawaban
          </Button>
        </CardFooter>
      )}
      {status == "correct" && <CardFooter className="py-2"></CardFooter>}
      {status == "incorrect" && (
        <CardFooter className="flex justify-center py-2">
          <Button variant="outline" className="my-2 flex gap-2" onClick={() => setStatus("idle")}>
            <Icons.MoveLeft />
            Coba lagi
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

function ExerciseOption(props: Readonly<{ answers: string[] }>) {
  const [isClicked, setIsClicked] = React.useState<number | null>(null)
  const [setAnswer] = useExerciseStore(useShallow((state) => [state.setAnswer]))

  const handleClick = (index: number, value: string) => {
    setIsClicked(index)
    setAnswer(value)
  }

  return (
    <CardContent className="flex flex-col gap-2 border p-4">
      {props.answers.map((item, index) => (
        <Button
          variant={"outline"}
          onClick={() => handleClick(index, item)}
          className={cn("flex justify-start p-6 pl-4 transition", { "bg-muted": isClicked == index })}
          key={index}
        >
          <div className="flex w-auto items-center gap-2">
            <div
              className={cn("mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-optionCircle transition", {
                "bg-activeOptionCircle": isClicked == index,
              })}
            >
              <p
                className={cn("font-semibold text-optionAnswer transition", {
                  "text-activeOptionAnswer": isClicked == index,
                })}
              >
                {indexToAlphabet(index)}
              </p>
            </div>
            <p
              className={cn("ml-2 whitespace-normal text-muted-foreground transition", {
                "text-foreground": isClicked == index,
              })}
            >
              {item}
            </p>
          </div>
        </Button>
      ))}
    </CardContent>
  )
}

function ExerciseResult(props: Readonly<{ answers: string[]; hint: string; explanation: string }>) {
  const [status, answer] = useExerciseStore(useShallow((state) => [state.status, state.answer]))

  const convertAlphabet = (answers: string[], answer: string) => {
    const idx = answers.indexOf(answer)
    console.log(idx)
    return indexToAlphabet(idx)
  }

  const option = convertAlphabet(props.answers, answer)

  return (
    <>
      {status === "correct" ? (
        <CardContent className="flex min-h-[258px] flex-col items-center justify-center gap-2 p-4">
          <div
            className={cn("flex  h-8 w-8 items-center justify-center rounded-full bg-activeOptionCircle transition")}
          >
            <p className={cn("text-activeOptionAnswer transition")}>{option}</p>
          </div>
          <p className="text-md my-2 font-semibold">{"//"}</p>
          <div className="my-4 flex w-auto items-center justify-center gap-2 rounded-3xl bg-correctBadgeResult px-3 py-2">
            <Icons.Check className="flex h-4 w-4 items-center text-correctBadgeResultText" />
            <p className="text-sm font-semibold text-correctBadgeResultText">Benar</p>
          </div>
          <p className="mx-auto w-full max-w-[380px] items-center justify-center text-center text-sm text-muted-foreground">
            {props.explanation}
          </p>
        </CardContent>
      ) : (
        <CardContent className="flex min-h-[258px] flex-col items-center justify-center gap-2 p-4">
          <div className={cn("flex  h-8 w-8 items-center justify-center rounded-full bg-muted transition")}>
            <p className={cn("text-muted-foreground transition")}>{option}</p>
          </div>
          <div className="my-4 flex w-auto items-center justify-center gap-2 rounded-3xl bg-wrongBadgeResult px-3 py-2">
            <Icons.Close className="flex h-4 w-4 items-center stroke-[3] text-wrongBadgeResultText" />
            <p className="text-sm font-semibold text-wrongBadgeResultText">Salah</p>
          </div>
          <p className="mx-auto w-full max-w-[380px] items-center justify-center text-center text-sm text-muted-foreground">
            petunjuk: {props.hint}
          </p>
        </CardContent>
      )}
    </>
  )
}
