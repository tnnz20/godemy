"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "@/types/index"
import { cn } from "@/lib/utils"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

interface ChapterSidebarNavProps {
  items: SidebarNavItem[]
}

export function ChapterSidebarNav({ items }: ChapterSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full">
      <Accordion type="single" collapsible className={cn()}>
        {items.map((item, index) => (
          <div key={index}>
            <AccordionItem value={"item" + index}>
              <AccordionTrigger className={cn("my-2 ml-3")}>{item.title}</AccordionTrigger>
              {item.items ? <ChapterSidebarNavItem items={item.items} pathname={pathname} /> : null}
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  ) : null
}

interface ChapterSidebarNavItem extends ChapterSidebarNavProps {
  pathname: string | null
}

export function ChapterSidebarNavItem({ items, pathname }: ChapterSidebarNavItem) {
  return items.length ? (
    <AccordionContent className={cn("ml-3")}>
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn("flex w-full items-center rounded-md p-2 hover:underline", {
              "bg-muted": pathname === item.href,
            })}
          >
            {item.title}
          </Link>
        ) : (
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60" key={index}>
            {item.title}
          </span>
        )
      )}
    </AccordionContent>
  ) : null
}
