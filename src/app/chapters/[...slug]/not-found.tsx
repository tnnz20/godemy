"use client"

import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function NotFound() {
  const router = useRouter()
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Icons.Warning className="h-20 w-20 text-accent" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Halaman Tidak ditemukan.</p>
      <Button variant={"default"} className={cn("mt-2")} onClick={() => router.back()}>
        Kembali
      </Button>
    </main>
  )
}
