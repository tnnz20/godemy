import Link from "next/link"
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
        <Button variant={"ghost"}>
          <Link href={pager.prev.path} className="flex flex-row items-center">
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            {pager.prev.title}
          </Link>
        </Button>
      )}
      {pager?.next && (
        <Button variant={"ghost"} className="ml-auto">
          <Link href={pager.next.path} className="flex flex-row items-center">
            {pager.next.title}
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}

export function getPagerForDoc(chapter: Chapter) {
  const flattenedLinks = [null, ...flatten(chaptersConfig.sideNav), null]
  const activeIndex = flattenedLinks.findIndex((link) => chapter.slug === link?.path)
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null

  return {
    prev,
    next,
  }
}

export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [])
}
