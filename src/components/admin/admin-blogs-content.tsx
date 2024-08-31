import AdminBlogs from "./admin-blogs"
import AdminBlogsPagination from "./admin-blogs-pagination"

const AdminBlogsContent = () => {
  return (
    <div className="blogs-content">
      <AdminBlogs />
      <AdminBlogsPagination />
    </div>
  )
}

export default AdminBlogsContent