import { useRouter } from "next/navigation"
import { QuizConfig } from "@/types"

import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button"

interface SubmitProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  selectedQuestion: QuizConfig
  variant?: "default" | "destructive" | "outline" | "secondary"
}

export default function SubmitDialog({
  children,
  className,
  selectedQuestion,
  variant = "default",
}: Readonly<SubmitProps>) {
  const router = useRouter()
  const handleFinished = () => {
    try {
      const storedAnswersJSON = localStorage.getItem("answers")

      if (storedAnswersJSON && storedAnswersJSON !== "undefined") {
        const storedAnswers = JSON.parse(storedAnswersJSON)

        const correctAnswersCount = selectedQuestion.quizItem.reduce((count, item) => {
          const userAnswer = storedAnswers[item.id]
          const isCorrect = userAnswer === item.correctAnswer

          return count + (isCorrect ? 1 : 0)
        }, 0)

        console.log((correctAnswersCount / selectedQuestion.quizItem.length) * 100)
      }
    } catch (error) {
      console.error(error)
    } finally {
      localStorage.removeItem("answers")
      router.push(`/chapters/${1}/kuis`)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className={cn(buttonVariants({ variant, className }))}>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Akhiri kuis?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak dapat dibatalkan. Ini akan mengakhiri kuis Anda secara permanen dan menyimpan semua
            jawaban yang telah dipilih sebelumnya.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleFinished()}>Akhiri</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
