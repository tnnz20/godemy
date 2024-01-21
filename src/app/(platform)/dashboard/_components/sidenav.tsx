import Link from "next/link"

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
    </div>
  )
}
