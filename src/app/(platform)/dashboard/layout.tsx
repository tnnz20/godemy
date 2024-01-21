import { Metadata } from "next"

import { DashboardConfig } from "@/config/site"

import SideNav from "./_components/sidenav"

interface DocsLayoutProps {
  children: React.ReactNode
}

console.log(DashboardConfig.name)

export const metadata: Metadata = {
  title: {
    default: DashboardConfig.name,
    template: `%s | ${DashboardConfig.name}`,
  },
  description: DashboardConfig.description,
  icons: [
    {
      url: "/Icon.svg",
    },
  ],
}

export default function DocsLayout({ children }: Readonly<DocsLayoutProps>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
