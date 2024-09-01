import { handleFileUpload } from '@/lib/uploadHandler';
import { NextRequest, NextResponse } from 'next/server';
import blogs from '@/config/___persist___/blogs/db.json';
import { Blog } from '@/interface';

// GET REQUEST ============================================================================================

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get query parameters
  const search = searchParams.get('search') || '';
  const limit = parseInt(searchParams.get('limit') ?? '') || blogs.data.length;
  const offset = parseInt(searchParams.get('offset') ?? '') || 0;
  const id = searchParams.get('id');

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
  return NextResponse.json({ count: filteredBlogs.length, blogs: filteredBlogs });
}

// POST REQUEST ===========================================================================================

export async function POST(request: NextRequest) {
  // To handle the request with the same logic as `upload.ts`, convert NextRequest to NextApiRequest
  const { body } = request;
  
  // Assuming the body is a ReadableStream, you'll need to handle that as required.
  // For simplicity, here's how you could directly pass it to the upload handler.

  const req = request as any; // Type-casting for simplicity
  const res = NextResponse; // Assume this is where the NextResponse logic will be handled

  return await handleFileUpload(req, res);
}

// Exporting config to disable default body parser
export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle multipart data
  },
};
