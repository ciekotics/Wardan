import { useGetAllBlogsQuery } from "@/store/actions/slices/api-slice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const BlogCardContent = () => {
  const {
    data: allBlogs,
    isSuccess,
    isLoading,
    isError,
  } = useGetAllBlogsQuery({});

  // if (isLoading) {
  //   return <LoadingSkeleton />;
  // }

  if (isError) {
    return <div>Error loading blogs</div>;
  }

  return (
    <React.Fragment>
      {allBlogs?.blogs?.map((blog, index) => (
        <div key={index} className="card blog-card">
          <div className="content">
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            <p>{blog["created-at"]}</p>
          </div>

          <Image
            src={blog.banner}
            alt={blog.title + " " + blog.id}
            width={1000}
            height={1000}
            priority
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default BlogCardContent;
