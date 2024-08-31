/**
 * Retrieves a list of blogs from the blog.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the blogs data.
 */

import fs from "fs";
import path from "path";
import { NextResponse, NextRequest } from "next/server";

// ==== DATA =======
import blogs from "@/config/___persist___/blogs/db.json";
import { Blog } from "@/interface";
// =================

const filePath = path.join(process.cwd(), "src/config/___persist___/blogs/db.json");

export async function GET() {
  return NextResponse.json({ blogs: blogs.data });
}

export async function POST(request: NextRequest) {
  try {
    const newBlog: Blog = await request.json();

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (!Array.isArray(data.data)) {
      throw new Error("Invalid data structure in JSON file");
    }

    const existingIds = data.data
      .map((blog: Blog) => blog.id)
      .filter((id: number | undefined): id is number => id !== undefined);
    const nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

    const newBlogWithId: Blog = { ...newBlog, id: nextId };
    data.data.push(newBlogWithId);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({ message: "Blog added successfully!" });
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json({ error: "Error adding blog" }, { status: 500 });
  }
}
