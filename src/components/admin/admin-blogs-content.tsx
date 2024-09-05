import AdminBlogs from "./admin-blogs"
import AdminBlogsPagination from "./admin-blogs-pagination"

const AdminBlogsContent = ({ search }: { search: string }) => {
  return (
    <div className="blogs-content">
      <AdminBlogs search={search} />
      <AdminBlogsPagination />
    </div>
  )
}

export default AdminBlogsContent