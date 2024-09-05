import { ReduxWrapper } from "@/components/redux-wrapper";
import BlogLayout from "../blog-layout";

const AddBlog = () => {
  return (
    <article>
      <ReduxWrapper>
        
        <BlogLayout />
      </ReduxWrapper>
    </article>
  );
};

export default AddBlog;
