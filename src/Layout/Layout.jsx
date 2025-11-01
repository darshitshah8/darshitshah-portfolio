import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
    <Navbar />
      {/* Page Content */}
      <div className="flex-1 pb-24 px-4 pt-6">
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
