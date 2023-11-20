"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarNavItem } from "@/types"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
  items: SidebarNavItem[]
}

export default function Navbar({ items }: Readonly<NavbarProps>) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  const pathname = usePathname()
  return (
    <nav className="fixed top-0 z-50 flex h-14 w-full items-center border-b bg-background px-4 shadow-sm">
      <div className="md:max-w-screen-3xl mx-auto flex w-full items-center justify-between">
        <Button variant={"ghost"} asChild>
          <Link href="/" className="flex flex-row items-center md:mx-2">
            <div className="flex items-center justify-between gap-2">
              <Icons.MoveLeft className="h-6 w-6" />
              <p className="hidden md:block md:text-xl md:font-medium">Golang Fundamental</p>
            </div>
          </Link>
        </Button>
        <div className="flex items-center justify-between">
          {!showMobileNav ? (
            <Button variant={"ghost"} className={cn("mx-2 md:hidden")} onClick={() => setShowMobileNav(true)}>
              <Icons.List />
            </Button>
          ) : (
            <Button variant={"ghost"} className={cn("mx-2 md:hidden")} onClick={() => setShowMobileNav(false)}>
              <Icons.Close />
            </Button>
          )}

          <div className={cn("mx-2")}>
            <ThemeToggle />
          </div>
        </div>
        {showMobileNav && items.length ? (
          <div className="fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max  overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
            <div className="relative z-20 grid gap-4 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
              <h3 className="px-2 text-lg font-bold">Silabus</h3>
              {items.map((item, index) => (
                <div className="pb-3" key={index}>
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-bold">{item.title}</h4>
                  {item.items ? <MobileNavbar items={item.items} pathname={pathname} /> : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

interface MobileNavbarProps extends NavbarProps {
  pathname: string | null
}

function MobileNavbar({ items, pathname }: Readonly<MobileNavbarProps>) {
  return items.length ? (
    <ul className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <li key={index}>
            <Link
              key={index}
              href={item.href}
              className={cn("flex w-full items-center rounded-md p-2 hover:underline", {
                "bg-muted": pathname === item.href,
              })}
            >
              {item.title}
            </Link>
          </li>
        ) : (
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60" key={index}>
            {item.title}
          </span>
        )
      )}
    </ul>
  ) : null
}
