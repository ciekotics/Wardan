import { useGetAllBlogsQuery } from "@/store/actions/slices/api-slice";
import React, { useEffect } from "react";

const BlogCardContent = () => {
  const { data: allBlogs, isSuccess, isLoading, isError } = useGetAllBlogsQuery({});

  // if (isLoading) {
  //   return <LoadingSkeleton />;
  // }

  if (isError) {
    return <div>Error loading blogs</div>;
  }

  return (
    <div className="blog-content">
      {allBlogs?.blogs?.map((blog, index) => (
        <div key={index} className="blog-card">
          {/* Render your blog card here */}
          {blog.title}
        </div>
      ))}
    </div>
  );
};

// const LoadingSkeleton = () => (
//   <React.Fragment>
//     {Array.from({ length: 12 }).map((_, index) => (
//       <div key={index} className="card card__loading"></div>
//     ))}
//   </React.Fragment>
// );

export default BlogCardContent;
