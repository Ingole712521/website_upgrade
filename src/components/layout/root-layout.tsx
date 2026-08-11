import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '@/components/layout'

export function RootLayout() {
  return (
    <div id="top" className="relative min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
