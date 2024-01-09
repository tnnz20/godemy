"use client"

import Link from "next/link"
import { useExerciseStore } from "@/store/useExerciseStore"
import { SidebarNavItem } from "@/types"
import { Chapter } from "contentlayer/generated"
import { useShallow } from "zustand/react/shallow"

import { chaptersConfig } from "@/config/chapters"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface PagerProps {
  chapter: Chapter
}

// TODO: update threshold
export function Pager({ chapter }: Readonly<PagerProps>) {
  const pager = getPagerForDoc(chapter)

  const [resetState] = useExerciseStore(useShallow((state) => [state.resetState]))

  if (!pager) return null

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Button variant={"ghost"} asChild onClick={resetState}>
          <Link href={pager.prev.href} replace className="flex flex-row items-center">
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            {pager.prev.title}
          </Link>
        </Button>
      )}
      {pager?.next && (
        <Button variant={"ghost"} className="ml-auto" asChild onClick={resetState}>
          <Link href={pager.next.href} replace className="flex flex-row items-center">
            {pager.next.title}
            <Icons.ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}

export function getPagerForDoc(chapter: Chapter) {
  const flattenedLinks = [null, ...flatten(chaptersConfig.sideNav), null]
  const activeIndex = flattenedLinks.findIndex((link) => chapter.slug === link?.href)
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null

  return {
    prev,
    next,
  }
}
export function flatten(links: SidebarNavItem[]) {
  return links.map((link) => link.items?.map((item) => item)).flat(2)
}
