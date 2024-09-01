import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import formidable, { IncomingForm, File } from "formidable";
import { v4 as uuidv4 } from "uuid";

// ==== DATA =======
import blogs from "@/config/___persist___/blogs/db.json";
import { Blog } from "@/interface";
// =================

const BLOGS_FILE_PATH = path.join(process.cwd(), "src/config/___persist___/blogs/db.json");
const BLOGS_UPLOADS_DIR = path.join(process.cwd(), "public/uploads/blogs");

const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

// Initialize the form configuration
const form = new IncomingForm({
  uploadDir: BLOGS_UPLOADS_DIR,
  keepExtensions: true,
  maxFileSize: 5 * 1024 * 1024, // 5 MB file size limit
  filter: ({ mimetype }) => ALLOWED_FILE_TYPES.includes(mimetype || ""),
});

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle multipart data
  },
};


// GET REQUEST ============================================================================================

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get query parameters
  const search = searchParams.get('search') || '';
  const limit = parseInt(searchParams.get('limit') ?? '') || blogs.data.length;
  const offset = parseInt(searchParams.get('offset') ?? '') || 0;
  const id = searchParams.get('id');

  let filteredBlogs = blogs.data;

  // Fetch by ID
  if (id) {
    filteredBlogs = filteredBlogs.filter(blog => blog.id === parseInt(id));
  } else {
    // Search by title
    if (search) {
      filteredBlogs = filteredBlogs.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply offset and limit
    filteredBlogs = filteredBlogs.slice(offset, offset + limit);
  }

  // Return the filtered blog posts and the total count
  return NextResponse.json({ count: filteredBlogs.length, blogs: filteredBlogs });
}

// ========================================================================================================




// POST REQUEST ===========================================================================================

export async function POST(request: NextRequest) {
  try {

    const parsedForm = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
      form.parse(request as any, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    console.log(parsedForm)
    const { fields, files } = parsedForm;

    // Utility function to safely extract string fields
    const getFieldValue = (field?: string | string[]): string => {
      if (field === undefined) return ""; // Handle undefined field
      return Array.isArray(field) ? field[0] : field;
    };


    if (!fields.title || !fields.slug || !files.banner) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }


    let bannerFile: File;
    if (Array.isArray(files.banner)) {
      bannerFile = files.banner[0]; 
    } else {
      bannerFile = files.banner as File;
    }


    if (!ALLOWED_FILE_TYPES.includes(bannerFile.mimetype || "")) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }


    const newFilename = `${uuidv4()}${path.extname(bannerFile.originalFilename || '')}`;
    const newFilePath = path.join(BLOGS_UPLOADS_DIR, newFilename);
    fs.renameSync(bannerFile.filepath, newFilePath);

    const data = JSON.parse(fs.readFileSync(BLOGS_FILE_PATH, "utf8"));

    if (!Array.isArray(data.data)) {
      throw new Error("Invalid data structure in JSON file");
    }

    const nextId = (data.data.length > 0 ? Math.max(...data.data.map((blog: Blog) => blog.id || 0)) : 0) + 1;

    const newBlog: Blog = {
      id: nextId,
      title: getFieldValue(fields.title),
      slug: getFieldValue(fields.slug),
      description: getFieldValue(fields.description),
      "small-paragraph": getFieldValue(fields["small-paragraph"]),
      "long-paragraph": getFieldValue(fields["long-paragraph"]),
      banner: `/uploads/blogs/${newFilename}`,
      "created-at": new Date().toDateString(),
    };

    data.data.push(newBlog);
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({ message: "Blog added successfully!" });
  } catch (error) {
    console.error("Error adding blog:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Internal Server Error", details: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "Internal Server Error", details: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}

// ========================================================================================================
