import Footer from "../../components/footer"
import Navbar from "./_components/navbar"

interface LayoutProps {
  children: React.ReactNode
}

// TODO: Fix Styling
export default function LayoutHome({ children }: Readonly<LayoutProps>) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
