// HOC Imports
import GuestOnlyRoute from '@/hocs/GuestOnlyRoute'

const Layout = ({ children, params }) => {
  return <GuestOnlyRoute lang={params.lang}>{children}</GuestOnlyRoute>
}

export default Layout
