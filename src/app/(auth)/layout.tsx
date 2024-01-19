import Footer from "../../components/footer"
import NavigationHome from "./_components/navigation-home"

interface LayoutProps {
  children: React.ReactNode
}

export default function LayoutAuth({ children }: Readonly<LayoutProps>) {
  return (
    <div className="flex flex-col">
      <NavigationHome />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
