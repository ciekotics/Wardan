
import {
  useAddBlogMutation,
  useGetDashboardMetricsQuery,
} from "@/store/actions/slices/api-slice";
import { Blog } from "@/interface";
import { useEffect, useState } from "react";

import { generateSlug } from "@/lib/utils";

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
    <div>
      hey
    </div>
  );
};

export default BlogHome;
