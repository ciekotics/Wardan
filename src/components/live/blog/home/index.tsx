'use client'

import { useAddBlogMutation, useGetDashboardMetricsQuery } from "@/store/actions/slices/api-slice"
import { v4 as uuidv4 } from 'uuid'; // To generate unique slugs or IDs

const BlogHome = () => {
  const { data } = useGetDashboardMetricsQuery()
  const [addBlog, { isLoading, error }] = useAddBlogMutation();

  console.log(data)

  const handleSubmit = async () => {
    const newBlog = {
      title: 'New Blog Post',
      content: 'This is the content of the blog post.',
    };

    try {
      await addBlog(newBlog).unwrap();
    } catch (err) {
      console.error("Failed to add blog:", err);
    }
  };

  return (
    <div>
      <button
        onClick={handleSubmit} // Ensure this triggers the handleSubmit function
        style={{ padding: 100, backgroundColor: "black", cursor: "pointer" }}
      >
        Click
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
    </div>
  );
}

export default BlogHome;
