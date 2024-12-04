import { storage } from "../../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v2 as cloudinary } from "cloudinary";
// Function to upload a file
export const uploadFile = async (file) => {
  const storageRef = ref(storage, `uploads/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};


export async function uploadPDF(file) {
  if (file.type !== "application/pdf") {
    throw new Error("Only PDF files are allowed.");
  }

  const uploadPreset = "pdf-uploader"; // Your preset name
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          upload_preset: uploadPreset, // Use the preset
          resource_type: "auto", // Automatically detect the file type
          use_filename: true, // Preserve the original file name
          unique_filename: true, // Prevent overwriting files
        },
        (error, result) => {
          if (error || !result) {
            reject(error || new Error("Upload result is undefined."));
          } else {
            resolve(result);
          }
        }
      )
      .end(buffer);
  });

  // Force inline rendering by appending ?inline=true
  return `${result.secure_url}?inline=true`;
}