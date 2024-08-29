'use client'

import { useAddBlogMutation, useGetDashboardMetricsQuery } from "@/store/actions/slices/api-slice"
import { Blog } from "@/interface"
import { useEffect, useState } from 'react';

// Function to generate a slug from the title
function generateSlug(title: string) {
  return title
    .toLowerCase()                  // Convert to lowercase
    .replace(/[^a-z0-9]+/g, '-')    // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, '');       // Remove leading and trailing hyphens
}

const BlogHome = () => {
  const { data } = useGetDashboardMetricsQuery();
  const [addBlog, { isLoading, error }] = useAddBlogMutation();
  const [existingSlugs, setExistingSlugs] = useState<string[]>([]);

  // Populate existing slugs from the query data
  useEffect(() => {
    if (data && Array.isArray(data)) {
      const slugs = data.map(blog => blog.slug);
      setExistingSlugs(slugs);
    }
  }, [data]);

  const generateUniqueSlug = (baseSlug: string) => {
    let slug = baseSlug;
    let count = 1;
    // Ensure slug is unique by checking existing slugs
    while (existingSlugs.includes(slug)) {
      slug = `${baseSlug}-${count}`;
      count += 1;
    }
    return slug;
  };

  const handleSubmit = async () => {
    const title = 'New Blog Post';
    const baseSlug = generateSlug(title);
    const uniqueSlug = generateUniqueSlug(baseSlug);

    const newBlog: Blog = {
      title: title,
      slug: uniqueSlug // Use the unique slug
    };

    try {
      await addBlog(newBlog).unwrap();
      // Optionally: Refresh the data to include the newly added blog
      // This may require refetching or revalidating the data
    } catch (err) {
      console.error("Failed to add blog:", err);
    }
  };

  return (
    <div>
      <button
        onClick={handleSubmit} // Trigger the handleSubmit function
        style={{ padding: 100, backgroundColor: "black", cursor: "pointer" }}
      >
        Click
      </button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default BlogHome;
