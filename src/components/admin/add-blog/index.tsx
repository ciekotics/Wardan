import { ReduxWrapper } from "@/components/redux-wrapper";
import NewBlogLayout from "./new-blog-layout";

const AddBlog = () => {
  return (
    <article>
      <ReduxWrapper>
        
        <NewBlogLayout />
      </ReduxWrapper>
    </article>
  );
};

export default AddBlog;
