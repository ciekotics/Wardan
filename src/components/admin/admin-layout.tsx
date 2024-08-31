import React from 'react'
import Topbar from './topbar'
import AdminDashboard from './admin-dashboard'

const AdminLayout = () => {
  return (
    <article className='admin-layout'>
      <Topbar />

      <AdminDashboard />
    </article>
  )
}

export default AdminLayout