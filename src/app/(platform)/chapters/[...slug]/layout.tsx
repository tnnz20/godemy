import { chaptersConfig } from "@/config/chapters"
import { ChapterSidebarNav } from "@/app/(platform)/chapters/_components/sidebar-nav"

import Navbar from "../_components/navbar"

interface DocsLayoutProps {
  children: React.ReactNode
}

// TODO: Fix Styling

export default function DocsLayout({ children }: Readonly<DocsLayoutProps>) {
  return (
    <div className="flex flex-col gap-2">
      <Navbar items={chaptersConfig.sideNav} />
      <div className="flex h-full">
        <div className="h-screen flex-1 overflow-y-auto">{children}</div>
        <ChapterSidebarNav items={chaptersConfig.sideNav} />
      </div>
    </div>
  )
}
