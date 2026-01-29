import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

const AdminLayout = () => {
    return (
        <div className="main-wrapper">
            <AdminHeader />
            <AdminSidebar />
            <div className="page-wrapper">
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
