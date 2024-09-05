import { ReduxWrapper } from "@/components/redux-wrapper";
import React from "react";
import BlogStrings from "./blog-strings";
import BlogImage from "./blog-image";

const BlogsContent = () => {
  return (
    <div className="wrapper">
      <div className="title">
        <ReduxWrapper>
          <BlogStrings keyString="title" />
        </ReduxWrapper>
      </div>
      <div className="description">
        <ReduxWrapper>
          <BlogStrings keyString="description" />
        </ReduxWrapper>
      </div>
      <div className="banner">
        <ReduxWrapper>
          <BlogImage />
        </ReduxWrapper>
      </div>
      <div className="small-paragraph">
        <ReduxWrapper>
          <BlogStrings keyString="small-paragraph" />
        </ReduxWrapper>
      </div>
      <div className="long-paragraph">
        <ReduxWrapper>
          <BlogStrings keyString="long-paragraph" />
        </ReduxWrapper>
      </div>
    </div>
  );
};

export default BlogsContent;
