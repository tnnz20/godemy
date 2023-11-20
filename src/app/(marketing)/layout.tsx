import Footer from "./_components/footer"
import Navbar from "./_components/navbar"

interface LayoutProps {
  children: React.ReactNode
}

// TODO: Fix Styling
export default function LayoutHome({ children }: Readonly<LayoutProps>) {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}
