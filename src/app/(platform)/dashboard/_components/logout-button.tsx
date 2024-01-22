import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface LogoutButtonDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}
export default function LogoutButtonDialog({ children, className }: Readonly<LogoutButtonDialogProps>) {
  const onLogout = async () => {
    "use server"
    const cookieStore = cookies()
    try {
      const token = cookieStore.get("token")

      if (token) {
        cookieStore.delete("token")
      } else {
        throw new Error("Token doesn't exist")
      }
    } catch (error) {
      console.error(error)
    }
    revalidatePath("/")
    redirect("/")
  }
  return (
    <div className="flex justify-end">
      <AlertDialog>
        <AlertDialogTrigger
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
            className
          )}
        >
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Keluar dari akun?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda akan dikeluarkan dari dashboard. Jika ingin kembali mengakses Dashboard silahkan Login lagi.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <form action={onLogout}>
              <AlertDialogAction type="submit">Keluar</AlertDialogAction>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
