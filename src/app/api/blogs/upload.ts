import { handleFileUpload } from '@/lib/uploadHandler';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post(handleFileUpload);

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle multipart data
  },
};

export default handler;
