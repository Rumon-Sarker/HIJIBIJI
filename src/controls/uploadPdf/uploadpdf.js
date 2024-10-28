import { v2 as cloudinary } from "cloudinary";

export async function uploadPDF(file) {
  const uploadPreset = "upload"; // Make sure this preset allows PDF uploads
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { 
          upload_preset: uploadPreset,
          resource_type: 'raw' // Specify that you're uploading a non-image file (like PDF)
        },
        function (error, result) {
          if (error || result === undefined) {
            reject(error || new Error("Upload result is undefined."));
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });

  return result.secure_url; // Return the secure URL for the uploaded PDF
}
