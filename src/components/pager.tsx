import Link from "next/link"
import { SidebarNavItem } from "@/types"
import { Chapter } from "contentlayer/generated"

import { chaptersConfig } from "@/config/chapters"
import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

interface PagerProps {
  chapter: Chapter
}
export function Pager({ chapter }: Readonly<PagerProps>) {
  const pager = getPagerForDoc(chapter)

  if (!pager) return null

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Button variant={"ghost"} asChild>
          <Link href={pager.prev.href} className="flex flex-row items-center">
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            {pager.prev.title}
          </Link>
        </Button>
      )}
      {pager?.next && (
        <Button variant={"ghost"} className="ml-auto" asChild>
          <Link href={pager.next.href} className="flex flex-row items-center">
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
