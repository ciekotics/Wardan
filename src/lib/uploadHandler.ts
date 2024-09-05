import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Define allowed file types and paths
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const BLOGS_UPLOADS_DIR = path.join(process.cwd(), "public/uploads/blogs");
const BLOGS_FILE_PATH = path.join(
  process.cwd(),
  "src/config/___persist___/blogs/db.json"
);

// Helper function to check if the file type is allowed
function isAllowedFileType(fileType: string): boolean {
  return ALLOWED_FILE_TYPES.includes(fileType);
}

// Helper function to read and parse the existing JSON file
async function readJsonFile(filePath: string): Promise<any> {
  if (!fs.existsSync(filePath)) {
    return { data: [] };
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

// Helper function to write data to the JSON file
async function writeJsonFile(filePath: string, data: any): Promise<void> {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Upload handler function
export async function handleFileUpload(
  formData: FormData
): Promise<NextResponse> {
  try {
    // Extract file and other fields from FormData
    const file = formData.get("banner") as File;
    const title = formData.get("title")?.toString() || "";
    const slug = formData.get("slug")?.toString() || "";
    const description = formData.get("description")?.toString() || null;
    const smallParagraph = formData.get("small-paragraph")?.toString() || null;
    const longParagraph = formData.get("long-paragraph")?.toString() || "";

    // Check if file is provided and its type is allowed
    if (!file || !isAllowedFileType(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type or no file uploaded" },
        { status: 400 }
      );
    }

    // Read the existing JSON data
    const jsonData = await readJsonFile(BLOGS_FILE_PATH);

    // Generate a new blog entry
    const nextId = jsonData.data.length
      ? jsonData.data[jsonData.data.length - 1].id + 1
      : 1;

    // Generate a unique filename
    const newFilename = `${nextId}_${file.name}`;
    const filePath = path.join(BLOGS_UPLOADS_DIR, newFilename);

    // Ensure the upload directory exists
    if (!fs.existsSync(BLOGS_UPLOADS_DIR)) {
      fs.mkdirSync(BLOGS_UPLOADS_DIR, { recursive: true });
    }

    // Save the file to the server
    const buffer = await file.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));
    const newBlog = {
      id: nextId,
      title,
      slug,
      description,
      "small-paragraph": smallParagraph,
      "long-paragraph": longParagraph,
      banner: `/uploads/blogs/${newFilename}`,
      "created-at": new Date().toDateString(),
    };

    // Add the new blog entry to the data
    jsonData.data.push(newBlog);

    // Write the updated JSON data to the file
    await writeJsonFile(BLOGS_FILE_PATH, jsonData);

    // Return a success response
    return NextResponse.json(
      { message: "File uploaded and blog entry created successfully", submit: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
