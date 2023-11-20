import { chaptersConfig } from "@/config/chapters"
import { ChapterSidebarNav } from "@/app/(platform)/chapters/_components/sidebar-nav"

import Navbar from "../_components/navbar"

interface DocsLayoutProps {
  children: React.ReactNode
}

// TODO: Fix Styling

export default function DocsLayout({ children }: Readonly<DocsLayoutProps>) {
  return (
    <div>
      <Navbar items={chaptersConfig.sideNav} />
      <div className="flex">
        <ChapterSidebarNav items={chaptersConfig.sideNav} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
