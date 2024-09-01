import fs from 'fs';
import path from 'path';
import formidable, { File } from 'formidable';
import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream';
import { IncomingMessage } from 'http';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const BLOGS_UPLOADS_DIR = path.join(process.cwd(), 'public/uploads/blogs');
const BLOGS_FILE_PATH = path.join(process.cwd(), 'src/config/___persist___/blogs/db.json');

const form = formidable({
  uploadDir: BLOGS_UPLOADS_DIR,
  keepExtensions: true,
  multiples: true, // Handle multiple files if needed
});

const getFieldValue = (field?: string | string[]): string => {
  if (field === undefined) return '';
  return Array.isArray(field) ? field[0] : field;
};

// Custom class to extend Readable and add IncomingMessage properties
class NextRequestWrapper extends Readable implements IncomingMessage {
  headers: IncomingHttpHeaders;
  method: string;
  url: string;
  socket: Socket;

  constructor(req: NextRequest) {
    super();
    this.headers = Object.fromEntries(req.headers);
    this.method = req.method;
    this.url = req.url;
    this.socket = req['socket'] || { remoteAddress: '' } as Socket;

    const reader = req.body?.getReader();

    const stream = this;
    (async function pushData() {
      if (!reader) {
        stream.push(null);
        return;
      }

      const { done, value } = await reader.read();
      if (done) {
        stream.push(null);
      } else {
        stream.push(value);
        pushData();
      }
    })();
  }

  _read() {} // Implement the _read method as a no-op
}

export const handleFileUpload = async (req: NextRequest): Promise<NextResponse> => {
  try {
    // Wrap the NextRequest in our custom wrapper
    const wrappedReq = new NextRequestWrapper(req);

    // Parse the form data using the wrapped request
    const parsedForm = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
      form.parse(wrappedReq, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const { fields, files } = parsedForm;

    if (!fields.title || !fields.slug || !files.banner) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let bannerFile: File;
    if (Array.isArray(files.banner)) {
      bannerFile = files.banner[0];
    } else {
      bannerFile = files.banner as File;
    }

    if (!ALLOWED_FILE_TYPES.includes(bannerFile.mimetype || '')) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    if (!fs.existsSync(BLOGS_UPLOADS_DIR)) {
      fs.mkdirSync(BLOGS_UPLOADS_DIR, { recursive: true });
    }

    if (!fs.existsSync(BLOGS_FILE_PATH)) {
      fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify({ data: [] }), 'utf8');
    }
    const data = JSON.parse(fs.readFileSync(BLOGS_FILE_PATH, 'utf8'));

    if (!Array.isArray(data.data)) {
      throw new Error('Invalid data structure in JSON file');
    }

    const nextId = (data.data.length > 0 ? Math.max(...data.data.map((blog: { id?: number }) => blog.id || 0)) : 0) + 1;

    const newFilename = `${nextId}-${path.extname(bannerFile.originalFilename || '')}`;
    const newFilePath = path.join(BLOGS_UPLOADS_DIR, newFilename);
    fs.renameSync(bannerFile.filepath, newFilePath);

    const newBlog = {
      id: nextId,
      title: getFieldValue(fields.title),
      slug: getFieldValue(fields.slug),
      description: getFieldValue(fields.description),
      'small-paragraph': getFieldValue(fields['small-paragraph']),
      'long-paragraph': getFieldValue(fields['long-paragraph']),
      banner: `/uploads/blogs/${newFilename}`,
      'created-at': new Date().toDateString(),
    };

    data.data.push(newBlog);
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');

    return NextResponse.json({ message: 'Blog added successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error adding blog:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
