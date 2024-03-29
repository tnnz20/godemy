import React from "react"

import { TimeCountDown } from "./timer"

type NavbarProps = {
  category: string
}

export default function QuizNavbar({ category }: Readonly<NavbarProps>) {
  return (
    <div className="mx-auto flex h-auto w-full max-w-screen-xl items-center justify-end border-b px-4 py-2 md:justify-between lg:max-w-screen-2xl">
      <h1 className="hidden text-xl md:block">Kategori: {category}</h1>
      <div className="mr-5 border p-3">
        <TimeCountDown limit={60000} />
      </div>
    </div>
  )
}
