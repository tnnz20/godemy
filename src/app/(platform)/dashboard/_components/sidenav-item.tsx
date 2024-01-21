"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavStudentItem, NavTeacherItem } from "@/config/dashboard"
import { cn } from "@/lib/utils"

export default function NavLink() {
  const pathname = usePathname()
  const role = "teacher"
  const links = role === "teacher" ? NavTeacherItem : NavStudentItem
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium text-muted-foreground hover:bg-muted-foreground hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-muted-foreground text-muted": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
