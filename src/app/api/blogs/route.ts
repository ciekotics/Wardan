/**
 * Retrieves a list of blogs from the blog.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the blogs data.
 */

import blogs from '@/config/uploads/blog.json'
import { NextResponse, NextRequest } from 'next/server'

export async function GET() {
  return NextResponse.json({ characters: blogs.data })
}