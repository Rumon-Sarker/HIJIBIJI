import { storage } from "../../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v2 as cloudinary } from "cloudinary";
// Function to upload a file
// export const uploadFile = async (file) => {
//   const storageRef = ref(storage, `uploads/${file.name}`);
//   await uploadBytes(storageRef, file);
//   const url = await getDownloadURL(storageRef);
//   return url;
// };



// ============= upload file using uploadcare ===============
export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("UPLOADCARE_PUB_KEY", process.env.UPLOAD_CARE_KEY); // Replace with your public key
  formData.append("file", file);

  const response = await fetch("https://upload.uploadcare.com/base/", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload file");
  }

  const data = await response.json();
  return `https://ucarecdn.com/${data.file}/`;
}
