"use client";

import { useGetBlogQuery } from "@/store/actions/slices/api-slice";
import { useParams } from "next/navigation";
import React from "react";

const BlogsTab = () => {
  const param = useParams();
  const id = Number(param?.["post-id"]);

  const { data: blogData } = useGetBlogQuery(
    {
      id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  
  return (
    <span>
      <p>{blogData?.blogs?.[0]?.title}</p>
    </span>
  );
};

export default BlogsTab;
