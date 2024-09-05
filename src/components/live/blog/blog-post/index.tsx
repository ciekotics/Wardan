import Link from "next/link";
import BlogsTab from "./blogs-tab";
import { ReduxWrapper } from "@/components/redux-wrapper";
import BlogsContent from "./blogs-content";

const BlogPost = () => {
  return (
    <article className="blogpost-article">
      <section className="blogs-tab">
        <Link href={"/blogs"}>Home</Link>

        <ReduxWrapper>
          <BlogsTab />
        </ReduxWrapper>
      </section>

      <section className="blogs-content">
        <BlogsContent />
      </section>
    </article>
  );
};

export default BlogPost;
