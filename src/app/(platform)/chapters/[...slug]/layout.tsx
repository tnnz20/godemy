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
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] overflow-y-auto border-r px-4 py-6 md:sticky md:block">
          <ChapterSidebarNav items={chaptersConfig.sideNav} />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
