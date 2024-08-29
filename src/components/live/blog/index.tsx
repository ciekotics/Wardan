import { ReduxWrapper } from "@/components/redux-wrapper"
import BlogHome from "./home"

const BlogPage = () => {
  return (
    <article>
      <ReduxWrapper>
        <BlogHome />
      </ReduxWrapper>
    </article>
  )
}

export default BlogPage