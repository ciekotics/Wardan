import Link from "next/link";
import AllBlogsItem from "./all-blogs-item";

const AllBlogs = () => {
  return (
    <article className="allblogs-article">
      <section className="blogs-tab">
        <Link href={"/blogs"}>Home</Link>
        <span>
          <p>All Posts</p>
        </span>
      </section>

      <section className="allblogs-items">
        <AllBlogsItem />
      </section>
    </article>
  );
};

export default AllBlogs;
