"use client";

import { useGetBlogQuery } from "@/store/actions/slices/api-slice";
import { useParams } from "next/navigation";

const BlogString = ({
  keyString,
}: {
  keyString: "title" | "long-paragraph" | "description" | "small-paragraph";
}) => {
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

  return <h1>{blogData?.blogs?.[0]?.[keyString]}</h1>;
};

export default BlogString;
