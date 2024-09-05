import { handleFileUpload } from "@/lib/uploadHandler";
import { NextRequest, NextResponse } from "next/server";
import blogs from "@/config/___persist___/blogs/db.json";
import { Blog } from "@/interface";
import { handleDeleteBlog } from "@/lib/deleteBlogHandler";
import { handleFileEdit } from "@/lib/handleFileEdit";

// GET REQUEST ============================================================================================

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get query parameters
  const search = searchParams.get("search") || "";
  const limit = parseInt(searchParams.get("limit") ?? "") || blogs.data.length;
  const offset = parseInt(searchParams.get("offset") ?? "") || 0;
  const id = searchParams.get("id");

  let filteredBlogs: Blog[] = blogs.data;

  // Fetch by ID
  if (blogs.data.length > 0) {
    if (id) {
      filteredBlogs = filteredBlogs.filter((blog) => blog.id === parseInt(id));
    } else {
      // Search by title
      if (search) {
        filteredBlogs = filteredBlogs.filter((blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Apply offset and limit
      filteredBlogs = filteredBlogs.slice(offset, offset + limit);
    }
  }

  // Return the filtered blog posts and the total count
  return NextResponse.json({
    count: filteredBlogs.length,
    blogs: filteredBlogs,
  });
}

// POST REQUEST ===========================================================================================

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data: Record<string, any> = {};

    formData.forEach(async (value, key) => {
      if (value instanceof File) {
        data[key] = {
          name: value.name,
          size: value.size,
          type: value.type,
        };

        // Convert file to buffer
        const buffer = await value.arrayBuffer();

        console.log(
          `${key} - Buffer (first 100 bytes):`,
          new Uint8Array(buffer).slice(0, 100)
        );
        console.log(`${key} - Buffer length:`, buffer.byteLength);
        console.log(`${key} - MIME type:`, value.type);
      } else {
        data[key] = value;
      }
    });

    // await new Promise(resolve => setTimeout(resolve, 0));

    return await handleFileUpload(formData);

    // return NextResponse.json({ message: 'Data received and logged successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH BLOG BY ID ===================================================================================

export async function PATCH(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data: Record<string, any> = {};

    const entries = Array.from(formData.entries());

    for (const [key, value] of entries) {
      if (value instanceof File) {
        data[key] = {
          name: value.name,
          size: value.size,
          type: value.type,
        };

        const buffer = await value.arrayBuffer();
        console.log(
          `${key} - Buffer (first 100 bytes):`,
          new Uint8Array(buffer).slice(0, 100)
        );
        console.log(`${key} - Buffer length:`, buffer.byteLength);
        console.log(`${key} - MIME type:`, value.type);
      } else {
        data[key] = value;
      }
    }
    const blogId = formData.get('id') as string | null;

    // Convert blogId to number and check if it's valid
    const blogIdNumber = blogId ? parseInt(blogId, 10) : NaN;
    if (isNaN(blogIdNumber)) {
      return NextResponse.json({ error: 'Invalid or missing Blog ID' }, { status: 400 });
    }

    // Call the file handler with formData and blogId
    return await handleFileEdit(formData, blogIdNumber);

    // Return a success response
    // return NextResponse.json({ message: 'Data received and logged successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// REMOVE BLOG BY ID ==================================================================================

export async function DELETE(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    const id = body.id;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    return await handleDeleteBlog(id);
  } catch (error) {
    console.error("Error removing blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// // Exporting config to disable default body parser
// export const config = {
//   api: {
//     bodyParser: false, // Disable the default body parser to handle multipart data
//   },
// };
