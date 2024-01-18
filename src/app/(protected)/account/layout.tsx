import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default function AccountLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      
        <div>
            {/* Navbar */}
            <Navbar/>
            {children}
            <Footer />
            </div>
    
    )
  }