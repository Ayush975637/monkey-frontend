// "use server";

// import { cloudinary } from '@/lib/cloudinary';
// import { NextResponse } from 'next/server';
// import { v4 as uuidv4 } from 'uuid';
// import { writeFile } from 'fs/promises';
// import path from 'path';


//   export async function uploadImage(file){
    
//     if (!file) return { error: "No file" }

//     const buffer = Buffer.from(await file.arrayBuffer())
//     const tmpPath = path.join("/tmp", uuidv4() + file.name)
//     await writeFile(tmpPath, buffer)
  
//     const result = await cloudinary.uploader.upload(tmpPath, {
//       folder: "user_uploads",
//     })
  
//     return { url: result.secure_url }




//   }
"use server";

import { cloudinary } from '@/lib/cloudinary';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises';
import path from 'path';
import os from 'os'; // ✅ import OS module

export async function uploadImage(file) {
  if (!file) return { error: "No file" };

  const buffer = Buffer.from(await file.arrayBuffer());
  
  // ✅ Use OS-specific temp directory
  const tmpPath = path.join(os.tmpdir(), uuidv4() + file.name);

  await writeFile(tmpPath, buffer);

  const result = await cloudinary.uploader.upload(tmpPath, {
    folder: "user_uploads",
  });

  return { public_id: result.public_id, secure_url: result.secure_url };
}
export async function uploadFile(formData) {
  const file = formData.get('file'); // ✅ get file from FormData
  if (!file) return { error: 'No file received' };

  const buffer = Buffer.from(await file.arrayBuffer());
  const tmpPath = path.join(os.tmpdir(), uuidv4() + file.name);

  await writeFile(tmpPath, buffer);

  try {
    const result = await cloudinary.uploader.upload(tmpPath, {
      folder: 'user_uploads',
    });

    return {
      public_id: result.public_id,
      secure_url: result.secure_url,
    };
  } catch (error) {
    return { error: error.message || 'Upload failed' };
  }
}