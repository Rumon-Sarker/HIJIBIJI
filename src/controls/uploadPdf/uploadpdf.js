import { storage } from '../../firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


// Function to upload a file
export const uploadFile = async (file) => {
  const storageRef = ref(storage, `uploads/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url
};
