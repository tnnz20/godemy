import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="hidden md:block">
      <p className="font-logo text-xl font-medium tracking-wider transition hover:opacity-75 ">
        <span className="mr-1 border-2 border-slate-600 px-[2px]">Go</span>demy
      </p>
    </Link>
  )
}
