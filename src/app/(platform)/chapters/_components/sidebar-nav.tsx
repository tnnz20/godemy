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

  const currentOpenPage = items.find((section) => section.items?.some((item) => item.href === pathname))
  const currentIndexPage = items.findIndex((section) => section?.title === currentOpenPage?.title)
  console.log("🚀 ~ file: sidebar-nav.tsx:24 ~ ChapterSidebarNav ~ currentIndexPage:", currentIndexPage)

  const [showSideNav, setShowSideNav] = useState<boolean>(true)
  return (
    <div>
      <Button
        onClick={() => setShowSideNav(true)}
        className={cn("border-r-lg fixed -left-2 top-20 z-50 hidden md:inline-block", {
          "font-medium md:hidden": showSideNav,
        })}
      >
        <Icons.List className={cn("rotate-180")} />
      </Button>

      {items.length ? (
        <nav
          className={cn("fixed -left-1/2 top-14 z-30  hidden h-screen border-r px-4 py-6 md:block", {
            "sticky bottom-0 left-0 animate-in slide-in-from-left-1/2": showSideNav,
          })}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xl font-bold">Silabus</h3>
            <Button variant={"ghost"} className={cn("")} onClick={() => setShowSideNav(false)}>
              <Icons.Close />
            </Button>
          </div>
          <Accordion type="single" defaultValue={`item-${currentIndexPage}`} collapsible>
            {items.map((item, index) => (
              <div key={index}>
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
