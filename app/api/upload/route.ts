import { v2 as cloudinary } from 'cloudinary';
import { NextRequest } from 'next/server';

import { Readable } from 'stream';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  })



// export const POST = async (req: NextRequest) => {
//     const formData = await req.formData();
//     const file = formData.get('file') as File;
  
//     if (!file) {
//       return new Response(JSON.stringify({ error: 'No file uploaded' }), { status: 400 });
//     }
  
//     const buffer = Buffer.from(await file.arrayBuffer());
  
//     try {
//       const result = await new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           { folder: 'user_uploads' },
//           (error, result) => {
//             if (error) return reject(error);
//             resolve(result);
//           }
//         );
  
//         Readable.from(buffer).pipe(stream);
//       });
  
//       return Response.json(result);
//     } catch (error: any) {
//       return Response.json({ error: error.message || 'Upload failed' }, { status: 500 });
//     }
//   };

export const POST = async (req: NextRequest) => {
    try {
      const formData = await req.formData();
      const file = formData.get('file');
  
      if (!file || typeof file === "string") {
        return new Response(JSON.stringify({ error: 'Invalid file' }), { status: 400 });
      }
  
      const buffer = Buffer.from(await file.arrayBuffer());
  
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'user_uploads',
            resource_type: 'auto', // auto-detect file type (image, video, raw, etc.)
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
  
        Readable.from(buffer).pipe(uploadStream);
      });
  
      return Response.json(result);
    } catch (error: any) {
      console.error("Upload error:", error);
      return Response.json({ error: error.message || 'Upload failed' }, { status: 500 });
    }
  };