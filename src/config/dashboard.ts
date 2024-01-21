import { Archive, BookText, BookUser, Home, Shapes } from "lucide-react"

import { SidebarNavItem } from "@/types/dashboard"

export const NavTeacherItem: SidebarNavItem[] = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Daftar Siswa",
    href: "/dashboard/daftar-siswa",
    icon: BookUser,
  },
  {
    name: "Daftar Kelas",
    href: "/dashboard/daftar-kelas",
    icon: Archive,
  },
  {
    name: "Compiler",
    href: "dashboard/compiler",
    icon: Shapes,
  },
]
export const NavStudentItem: SidebarNavItem[] = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },

  {
    name: "Materi",
    href: "/dashboard/daftar-kelas",
    icon: BookText,
  },
  {
    name: "Compiler",
    href: "dashboard/compiler",
    icon: Shapes,
  },
]
