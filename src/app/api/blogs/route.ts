/**
 * Retrieves a list of blogs from the blog.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the blogs data.
 */

import fs from 'fs';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server'

// ==== DATA =======
import blogs from '@/config/uploads/blog.json'
// =================
const filePath = path.resolve('src/config/uploads/blog.json');

export async function GET() {
  return NextResponse.json({ characters: blogs.data })
}

export async function POST(request: NextRequest) {
  try {
    const newBlog = await request.json();
    console.log(newBlog)

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    data.data.push(newBlog);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    return NextResponse.json({ message: 'Blog added successfully!' });
  } catch (error) {
    console.error('Error adding blog:', error);
    return NextResponse.json({ error: 'Error adding blog' }, { status: 500 });
  }
}
