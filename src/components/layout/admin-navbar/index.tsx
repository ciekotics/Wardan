import { FaPlus } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <header id="admin-header">
      <div className="logo-title">{'ADMIN'}</div>

      <div className="wardan-btn">
        <FaPlus />
        <p>New Blog</p>
      </div>
    </header>
  );
};

export default AdminNavbar;
