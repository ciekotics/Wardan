'use client'

import React from "react";
import { ReduxWrapper } from "@/components/redux-wrapper";
import BlogCardContent from "./blog-card-content";

const BlogCardWrapper = () => {
  return (
    <div className="wrapper">
      <ReduxWrapper loading={LoadingSkeleton()}>
        <BlogCardContent />
      </ReduxWrapper>
    </div>
  );
};

// A separate component for loading skeleton
const LoadingSkeleton = () => (
  <React.Fragment>
    {Array.from({ length: 12 }).map((_, index) => (
      <div key={index} className="card card__loading"></div>
    ))}
  </React.Fragment>
);

export default BlogCardWrapper;
