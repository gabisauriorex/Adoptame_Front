// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { v4 } from "uuid"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9tLOS0X9BA3NIA4hwJwqIf0bxdqw_Lik",
  authDomain: "adoptame-b72a3.firebaseapp.com",
  projectId: "adoptame-b72a3",
  storageBucket: "adoptame-b72a3.appspot.com",
  messagingSenderId: "500990637633",
  appId: "1:500990637633:web:2d341e033f3ee4061a38c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadImage = async (file) => {
    console.log(file);
    const storageRef = ref(storage, `${Date.now()}-${file.name}`);
    await uploadBytes(storageRef, file);
    alert("ya esta cargado");
    return await getDownloadURL(storageRef);
};