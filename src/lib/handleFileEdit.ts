import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Define allowed file types and paths
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const BLOGS_UPLOADS_DIR = path.join(process.cwd(), 'public/uploads/blogs');
const BLOGS_FILE_PATH = path.join(process.cwd(), 'src/config/___persist___/blogs/db.json');

// Helper function to check if the file type is allowed
function isAllowedFileType(fileType: string): boolean {
  return ALLOWED_FILE_TYPES.includes(fileType);
}

// Helper function to read and parse the existing JSON file
async function readJsonFile(filePath: string): Promise<any> {
  if (!fs.existsSync(filePath)) {
    return { data: [] };
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

// Helper function to write data to the JSON file
async function writeJsonFile(filePath: string, data: any): Promise<void> {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Function to handle file edit and replacement
export async function handleFileEdit(
  formData: FormData,
  blogId: number
): Promise<NextResponse> {
  try {
    // Extract file and other fields from FormData
    const file = formData.get('banner') as File;
    const title = formData.get('title')?.toString() || '';
    const slug = formData.get('slug')?.toString() || '';
    const description = formData.get('description')?.toString() || null;
    const smallParagraph = formData.get('small-paragraph')?.toString() || null;
    const longParagraph = formData.get('long-paragraph')?.toString() || '';

    // Read the existing JSON data
    const jsonData = await readJsonFile(BLOGS_FILE_PATH);

    // Find the blog to update
    const blogIndex = jsonData.data.findIndex((blog: { id: number }) => blog.id === blogId);

    if (blogIndex === -1) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Handle image replacement
    if (file) {
      // Validate the file type
      if (!isAllowedFileType(file.type)) {
        return NextResponse.json(
          { error: 'Invalid file type' },
          { status: 400 }
        );
      }

      // Remove old image file if it exists
      const oldFilename = jsonData.data[blogIndex].banner.split('/').pop();
      if (oldFilename) {
        const oldFilePath = path.join(BLOGS_UPLOADS_DIR, oldFilename);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      // Save the new image file
      const newFilename = `${blogId}_${file.name}`;
      const filePath = path.join(BLOGS_UPLOADS_DIR, newFilename);
      const buffer = await file.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(buffer));

      // Update the banner path in JSON
      jsonData.data[blogIndex].banner = `/uploads/blogs/${newFilename}`;
    }

    // Update text fields
    jsonData.data[blogIndex] = {
      ...jsonData.data[blogIndex],
      title,
      slug,
      description,
      'small-paragraph': smallParagraph,
      'long-paragraph': longParagraph,
    };

    // Write the updated JSON data to the file
    await writeJsonFile(BLOGS_FILE_PATH, jsonData);

    // Return a success response
    return NextResponse.json(
      { message: 'Blog entry updated successfully', submit: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling file edit:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
