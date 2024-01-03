import React from "react"

import { Icons } from "./icons"

type Props = {}

export function Quiz({}: Props) {
  return (
    <div className="flex flex-col justify-center border-2 px-4 py-4">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center rounded-full bg-[#0072F5] p-2">
          <Icons.HelpCircle className="h-10 w-10 stroke-background stroke-[1.5]" />
        </div>
        <p className="text-lg">Waktunya untuk kuis.</p>
        <p className="text-center text-sm text-slate-500">Uji Pengetahuan anda berdasarkan ilmu yang didapatkan</p>
      </div>
    </div>
  )
}
