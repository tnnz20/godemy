"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "@/types/index"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface ChapterSidebarNavProps {
  items: SidebarNavItem[]
}

// TODO: Fix Styling

export function ChapterSidebarNav({ items }: Readonly<ChapterSidebarNavProps>) {
  const pathname = usePathname()
  const [showSideNav, setShowSideNav] = useState<boolean>(true)

  const currentOpenPage = items.find((section) => section.items?.some((item) => item.href === pathname))
  const currentIndexPage = items.findIndex((section) => section?.title === currentOpenPage?.title)

  return (
    <div>
      {!showSideNav ? (
        <Button
          onClick={() => setShowSideNav(true)}
          className={cn("border-r-lg fixed -right-2 top-20 z-50 hidden md:inline-block", {
            "": showSideNav,
          })}
        >
          <Icons.List className={cn("rotate-180")} />
        </Button>
      ) : null}

      {items.length ? (
        <nav
          className={cn(
            "fixed -left-1/2 top-14 z-30  hidden h-[calc(100vh-3.5rem)] overflow-y-auto border-l px-4 py-6  md:block",
            {
              "sticky bottom-0 left-0 animate-in slide-in-from-right-1/2": showSideNav,
            }
          )}
        >
          <div className="mr-2 flex items-center justify-between">
            <Button variant="ghost" size="icon" className={cn("px-1 transition")} onClick={() => setShowSideNav(false)}>
              <Icons.Close />
            </Button>
            <h3 className=" text-xl font-bold">Daftar Silabus</h3>
          </div>
          <Accordion type="single" defaultValue={`item-${currentIndexPage}`} collapsible>
            {items.map((item, index) => (
              <div key={item.title}>
                <AccordionItem value={"item-" + index} className="m-2">
                  <AccordionTrigger className={cn("flex gap-4")}>{item.title}</AccordionTrigger>
                  {item.items ? <ChapterSidebarNavItem items={item.items} pathname={pathname} /> : null}
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </nav>
      ) : null}
    </div>
  )
}

interface ChapterSidebarNavItem extends ChapterSidebarNavProps {
  pathname: string | null
}

export function ChapterSidebarNavItem({ items, pathname }: ChapterSidebarNavItem) {
  return items.length ? (
    <AccordionContent className={cn("ml-3")}>
      {items.map((item, index) =>
        //TODO: change disabled to threshold
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
