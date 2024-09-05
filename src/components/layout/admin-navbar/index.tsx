import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import NewBlogButton from "./new-blog-button";

const AdminNavbar = () => {
  return (
    <header id="admin-header">
      <div className="logo-title">{"ADMIN"}</div>

      <div className="btns">
        <Link href={"/admin/add-blog"} className="wardan-btn-ghost">
          <FaPlay />
          <p>Live</p>
        </Link>
        <NewBlogButton />
      </div>
    </header>
  );
};

export default AdminNavbar;
