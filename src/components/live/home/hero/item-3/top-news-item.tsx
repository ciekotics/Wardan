import { useGetAllBlogsQuery } from "@/store/actions/slices/api-slice";
import Image from "next/image";
import React from "react";

const TopNewsItem = () => {
  const {
    data: allBlogs,
    isSuccess,
    isLoading,
    isError,
  } = useGetAllBlogsQuery({});

  if (isError) {
    return <div>Error loading blogs</div>;
  }

  if (isLoading) {
    return (
      <div className="top-news--loader-wrapper">
        <div className="top-news--loader"></div>
        <div></div>
      </div>
    );
  }

  return (
    <React.Fragment>
      {allBlogs?.blogs?.map((item, index) => (
        <div className="top-news__item" key={index}>
          <Image
            src={item.banner}
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="content__loaded">
            <p className="title">{item.title}</p>
            <p className="date">{item["created-at"]}</p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TopNewsItem;
