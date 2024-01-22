import { BASE_URL } from "@/constants/constants"
import { Computer, Users } from "lucide-react"

import { CardWrapperProps } from "@/types/dashboard"

export default async function CardTeacherWrapper({ USER_TOKEN }: Readonly<CardWrapperProps>) {
  return (
    <>
      <Card title="Jumlah Kelas" value="4" type={"TotalClass"} />
      <Card title="Jumlah Siswa" value="10" type={"TotalStudent"} />
    </>
  )
}

const iconMap = {
  TotalClass: Computer,
  TotalStudent: Users,
}

type CardProps = {
  title: string
  value: string
  type: "TotalClass" | "TotalStudent"
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
