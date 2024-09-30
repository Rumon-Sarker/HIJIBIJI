"use server";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function upload(file) {
  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    const response = await cloudinary.uploader.upload(base64Image, {
      resource_type: "video",
      public_id: "my_video",
    });
    return response.secure_url;
  } catch (error) {
    console.error(error);
  }
}
