import { chaptersConfig } from "@/config/chapters"
import { ChapterSidebarNav } from "@/app/chapters/_components/sidebar-nav"

import Navbar from "../_components/navbar"

interface DocsLayoutProps {
  children: React.ReactNode
}

// TODO: Fix Styling

export default function DocsLayout({ children }: Readonly<DocsLayoutProps>) {
  return (
    <div>
      <Navbar />
      <div className="md:grid md:grid-cols-[400px_1fr] md:gap-6">
        <aside className="fixed hidden w-full overflow-y-auto md:sticky md:block">
          <ChapterSidebarNav items={chaptersConfig.sideNav} />
        </aside>
        {children}
      </div>
    </div>
  )
}
