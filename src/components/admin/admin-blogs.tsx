import { ReduxWrapper } from "../redux-wrapper"
import AdminAllBlogs from "./admin-all-blogs"

const AdminBlogs = ({ search }: { search: string }) => {
  return (
    <div className="blogs">
      <ReduxWrapper>
        <AdminAllBlogs search={search} />
      </ReduxWrapper>
    </div>
  )
}

export default AdminBlogs