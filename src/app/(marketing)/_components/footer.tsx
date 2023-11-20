import { ThemeToggle } from "@/components/theme-toggle"

export default function Footer() {
  return (
    <footer className="bottom-0 z-50 flex h-14 w-full items-center border-t px-4 shadow-sm ">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <p className="text-sm text-muted-foreground md:text-base">
          &copy; Di buat oleh{" "}
          <span className="font-medium underline underline-offset-4">Gusti Muhammad Aulia Nur Sulthan</span>
        </p>
        <ThemeToggle />
      </div>
    </footer>
  )
}
