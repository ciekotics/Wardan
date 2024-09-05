import React from 'react'
import AdminBlogsContent from './admin-blogs-content'

const AdminDashboard = ({ search }: { search: string }) => {
  return (
    <section className='dashboard'>
      <AdminBlogsContent search={search} />
    </section>
  )
}

export default AdminDashboard