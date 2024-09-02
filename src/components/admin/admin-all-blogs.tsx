"use client";

import { useGetAllBlogsQuery } from "@/store/actions/slices/api-slice";
import React, { useEffect } from "react";

import AdminBlogItem from "./admin-blog-item";

const AdminAllBlogs = ({ search }: { search: string }) => {

  const allBlogsQuery = useGetAllBlogsQuery({
    search
  }, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const allBlogs = allBlogsQuery.data;

  useEffect(() => {
  }, [search])

  return (
    <div className="all-blogs">
      {allBlogs?.blogs && allBlogs?.blogs?.length > 0 ? allBlogs?.blogs?.map((item, index) => {

        return (
          <React.Fragment key={index}>
            <AdminBlogItem item={item} />
          </React.Fragment>
        );
      }) : null}
    </div>
  );
};

export default AdminAllBlogs;
