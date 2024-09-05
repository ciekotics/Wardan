import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Define allowed file types and paths
const BLOGS_FILE_PATH = path.join(
  process.cwd(),
  "src/config/___persist___/blogs/db.json"
);
const BLOGS_UPLOADS_DIR = path.join(process.cwd(), "public/uploads/blogs");

export async function handleDeleteBlog(id: number) {
  try {
    // Load existing blog data
    const existingBlogs = JSON.parse(fs.readFileSync(BLOGS_FILE_PATH, "utf-8"));

    // Find the blog to remove
    const blogIndex = existingBlogs.data.findIndex(
      (blog: { id: number }) => blog.id === Number(id)
    );

    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Get the file name and path for the associated image
    const blog = existingBlogs.data[blogIndex];
    const imagePath = path.join(BLOGS_UPLOADS_DIR, path.basename(blog.banner));

    // Remove the blog entry
    existingBlogs.data.splice(blogIndex, 1);

    // Save updated blog data
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(existingBlogs, null, 2));

    // Delete the associated image file if it exists
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    return NextResponse.json(
      { message: "Blog removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting the blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
