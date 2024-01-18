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
    <div className="flex h-screen flex-col justify-center">
      <QuizNavbar category={selectedQuestion.category} />
      <div className="flex h-screen flex-col-reverse border md:flex-row">
        <Question selectedQuestion={selectedQuestion} />
        <QuizSidebar selectedQuestion={selectedQuestion} />
      </div>
    </div>
  )
}
