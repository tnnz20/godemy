import { Metadata } from "next"

import { QuizChapter } from "@/config/quiz"

import Question from "../_components/question"
import QuizNavbar from "../_components/quiz-navbar"
import QuizSidebar from "../_components/quiz-sidebar"

type PageProps = {
  params: {
    id: string
  }
}

async function getSelectedQuestionFromId(id: string) {
  const quizId = Number(id)
  const question = QuizChapter
  const selectedQuestion = question[quizId - 1]

  return selectedQuestion
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const selectedQuestion = await getSelectedQuestionFromId(params?.id)
  return {
    title: "Kuis " + selectedQuestion.category,
    description: `Halaman kuis ${selectedQuestion.category} Godemy.`,
  }
}

export default async function QuizPage({ params }: Readonly<PageProps>) {
  const selectedQuestion = await getSelectedQuestionFromId(params?.id)
  return (
    <div className="flex h-screen flex-col">
      <QuizNavbar category={selectedQuestion.category} />
      <div className="mx-auto mt-8 flex w-full max-w-screen-xl flex-col-reverse justify-between border md:mt-0 md:h-screen md:flex-row lg:max-w-screen-2xl">
        <Question selectedQuestion={selectedQuestion} />
        <QuizSidebar selectedQuestion={selectedQuestion} />
      </div>
    </div>
  )
}
