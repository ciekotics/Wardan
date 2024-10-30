// import {
//   useAddBlogMutation,
//   // useGetDashboardMetricsQuery,
// } from "@/store/actions/slices/api-slice";
// import { Blog } from "@/interface";
// import { useEffect, useState } from "react";

import { Fragment } from "react";
import FeaturedBlogs from "./featured-blogs";

// import { generateSlug } from "@/lib/utils";

const BlogHome = () => {
  // const { data } = useGetDashboardMetricsQuery();
  // const [addBlog, { isLoading, error }] = useAddBlogMutation();
  // const [existingSlugs, setExistingSlugs] = useState<string[]>([]);

  // useEffect(() => {
  //   if (data && Array.isArray(data)) {
  //     const slugs = data.map((blog) => blog.slug);
  //     setExistingSlugs(slugs);
  //   }
  // }, [data]);

  // const handleSubmit = async () => {
  //   const title = "New Blog Post";
  //   const uniqueSlug = generateSlug(title, existingSlugs)();

  //   const newBlog: Blog = {
  //     title: title,
  //     slug: uniqueSlug,
  //   };

  //   try {
  //     await addBlog(newBlog).unwrap();
  //   } catch (err) {
  //     console.error("Failed to add blog:", err);
  //   }
  // };

  return (
    <Fragment>
      <section className="blogs__hero">
        <div>
          <h1>
            Hey, we&apos;re <span className="website-name">Wardan.</span>
          </h1>
          <div className="underline"></div>
          <span className="next-line">
            See our thoughts, stories, and ideas.
          </span>
        </div>

        <div className="subscription-wrapper">
          <p>
            In a realm where the art of spice blending dances with the science
            of quality, we take pride in crafting the finest spices that infuse
            zest into kitchens worldwide, inviting you to explore our aromatic
            world and savor the passion behind every exquisite creation.
          </p>

          <div className="input-wrapper">
            <input type="text" placeholder="Email Address" />
            <div className="subscribe">Subscribe</div>
          </div>
        </div>
      </section>

      <section className="featured-blogs">
        <FeaturedBlogs />
      </section>
    </Fragment>
  );
};

export default BlogHome;
