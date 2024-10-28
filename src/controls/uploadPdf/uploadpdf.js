import { storage } from "../../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Function to upload a file
export const uploadFile = async (file) => {
  const storageRef = ref(storage, `uploads/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};

export async function uploadPDF(file) {
  const uploadPreset = "upload";
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          upload_preset: uploadPreset,
          resource_type: "raw",
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

  return result.secure_url;
}
