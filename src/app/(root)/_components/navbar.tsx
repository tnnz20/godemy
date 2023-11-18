import Link from "next/link"

import { homeConfig } from "@/config/root"
import { Button } from "@/components/ui/button"

// TODO: Fix Home Config
export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-14 w-full items-center border-b  px-4 shadow-sm ">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Link href="/" className="hidden md:block">
          <p className="font-logo text-lg font-medium tracking-wider transition hover:opacity-75 ">
            <span className="border-2 border-slate-600">Go</span>demy
          </p>
        </Link>
        <div className="hidden md:block">
          <ul className="flex justify-between gap-4 text-base text-muted-foreground">
            {homeConfig.map((item, index) => (
              <Link href={item.href} key={index} className="transition hover:text-foreground">
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button variant="outline" asChild>
            <Link href="#panduan">Panduan</Link>
          </Button>
          <Button asChild>
            <Link href="login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
