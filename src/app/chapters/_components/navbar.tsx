import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

// TODO: Fix Styling and add button for change theme, sidebar

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b bg-background shadow-sm">
      <Button variant={"ghost"} asChild>
        <Link href="/" className="mx-2 flex flex-row items-center">
          <div className="flex items-center justify-between gap-2">
            <Icons.ChevronLeft className="h-6 w-6" />
            <p className="hidden md:block md:text-xl md:font-medium">Golang Fundamental</p>
          </div>
        </Link>
      </Button>
      <Button variant={"ghost"} className={cn("mx-2 md:hidden")}>
        <Icons.List></Icons.List>
      </Button>
    </nav>
  )
}
