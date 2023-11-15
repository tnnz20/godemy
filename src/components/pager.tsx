import Link from "next/link"
import { Chapter } from "contentlayer/generated"

import { chaptersConfig } from "@/config/chapters"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { buttonVariants } from "./ui/button"

interface PagerProps {
  chapter: Chapter
}
export function Pager({ chapter }: Readonly<PagerProps>) {
  const pager = getPagerForDoc(chapter)

  if (!pager) return null

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link href={pager.prev.path} className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.ChevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link href={pager.next.path} className={cn(buttonVariants({ variant: "ghost" }))}>
          {pager.next.title}
          <Icons.ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(chapter: Chapter) {
  const flattenedLinks = [null, ...flatten({ links: chaptersConfig.sideNav }), null]
  const activeIndex = flattenedLinks.findIndex((link) => chapter.slug === link?.path)
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null

  return {
    prev,
    next,
  }
}

export function flatten({ links }: { links: { items?: {}[] }[] }): any {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten({ links: link.items }) : link)
  }, [])
}
