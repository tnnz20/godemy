import React from "react"

import { TimeCountDown } from "./timer"

type NavbarProps = {
  category: string
}

export default function QuizNavbar({ category }: NavbarProps) {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl items-center justify-end p-2 md:justify-between">
      <h1 className="hidden text-xl md:block">Kategori: {category}</h1>
      <div className="mr-5 border p-3">
        <TimeCountDown limit={600000} />
      </div>
    </div>
  )
}
