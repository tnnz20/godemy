import Link from "next/link"

import { Icons } from "@/components/icons"

import LogoutButtonDialog from "./logout-button"
import NavLink from "./sidenav-item"

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-secondary px-3 py-4 md:px-2">
      <Link className="mb-2 flex items-end  justify-start rounded-md bg-accent-foreground p-4 md:h-32" href="/">
        <div className="bg- w-32  md:w-40">
          <h2 className="text-bold text-2xl tracking-wider text-accent">
            <span className="rounded-sm border-2 p-1">Go</span>
            <span className="ml-1 border-b-2 pb-1">d</span>emy
          </h2>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLink />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
      </div>
      <LogoutButtonDialog className="flex h-10 justify-end border border-foreground px-4  py-2 pr-8 text-muted-foreground transition hover:border-none hover:bg-destructive hover:text-primary">
        <div className="flex items-center justify-end gap-2">
          <Icons.Logout className="h-4 w-4 " />
          Logout
        </div>
      </LogoutButtonDialog>
    </div>
  )
}
