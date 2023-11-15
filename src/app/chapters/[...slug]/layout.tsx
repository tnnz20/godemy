import { chaptersConfig } from "@/config/chapters"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ChapterSidebarNav } from "@/components/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: Readonly<DocsLayoutProps>) {
  return (
    <div className="md:grid md:grid-cols-[400px_1fr] md:gap-6">
      <Button className={cn("sticky  block rounded-r-full md:hidden")}>
        <Icons.List className={cn("rotate-180")} />
      </Button>
      <aside className="fixed hidden w-full overflow-y-auto md:sticky md:block">
        <ChapterSidebarNav items={chaptersConfig.sideNav} />
      </aside>
      {children}
    </div>
  )
}
