import { ReduxWrapper } from "../redux-wrapper"
import AdminAllBlogs from "./admin-all-blogs"

const AdminBlogs = () => {
  return (
    <div className="blogs">
      <ReduxWrapper>
        <AdminAllBlogs />
      </ReduxWrapper>
    </div>
  )
}

export default AdminBlogs