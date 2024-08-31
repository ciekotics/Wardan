import Link from "next/link";
import { FaPlus, FaPlay } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <header id="admin-header">
      <div className="logo-title">{"ADMIN"}</div>

      <div className="btns">
        <Link href={"/admin/add-blog"} className="wardan-btn-ghost">
          <FaPlay />
          <p>Live</p>
        </Link>
        <Link href={"/admin/add-blog"} className="wardan-btn">
          <FaPlus />
          <p>New Blog</p>
        </Link>
      </div>
    </header>
  );
};

export default AdminNavbar;
