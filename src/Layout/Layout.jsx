import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

const Layout = () => {
  return (
    <div>
    <Navbar />
      {/* Page Content */}
      <div>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
