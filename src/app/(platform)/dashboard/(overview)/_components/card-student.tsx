import { BASE_URL } from "@/constants/constants"
import { Activity, BookCheck } from "lucide-react"

import { CardWrapperProps } from "@/types/dashboard"

export default async function CardStudentWrapper({ USER_TOKEN }: Readonly<CardWrapperProps>) {
  return (
    <>
      <Card title="Progress Belajar" value="4" type={"Progress"} />
      <Card title="Jumlah Kuis Selesai" value="10" type={"TotalTask"} />
    </>
  )
}

const iconMap = {
  Progress: Activity,
  TotalTask: BookCheck,
}

type CardProps = {
  title: string
  value: string
  type: "Progress" | "TotalTask"
}

function Card({ title, value, type }: Readonly<CardProps>) {
  const Icon = iconMap[type]

  return (
    <div className="rounded-xl bg-muted-foreground p-2 shadow-sm">
      <div className="flex p-4 text-primary-foreground">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="ml-2 text-sm font-semibold">{title}</h3>
      </div>
      <p className={`truncate rounded-xl bg-muted px-4 py-8 text-center text-2xl `}>{value}</p>
    </div>
  )
}
