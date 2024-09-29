import { v2 as cloudinary } from "cloudinary";

export async function uploadImage(file) {
  const uploadPreset = "upload";
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ upload_preset: uploadPreset }, function (error, result) {
        if (error || result === undefined) {
          reject(error || new Error("Upload result is undefined."));
          return;
        }
        resolve(result);
      })
      .end(buffer);
  });
  // console.log(result.url)
  return result.url;
}
