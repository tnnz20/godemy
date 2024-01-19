import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function NavigationHome({ href = "/" }) {
  return (
    <Button variant={"ghost"} asChild>
      <Link href={href} className="absolute left-4 top-2 md:left-8 md:top-4">
        <Icons.ChevronLeft className="mr-2 h-4 w-4"></Icons.ChevronLeft>
        Back
      </Link>
    </Button>
  )
}
