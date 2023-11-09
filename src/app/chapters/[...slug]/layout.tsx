import { cn } from "@/lib/utils"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return <div className={cn("flex justify-center")}>{children}</div>
}
