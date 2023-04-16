import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyBYbWHRihRP_XxhP9A9bCyyVenvYmxBdgc",
  authDomain: "gymcommerce.firebaseapp.com",
  projectId: "gymcommerce",
  storageBucket: "gymcommerce.appspot.com",
  messagingSenderId: "598179282226",
  appId: "1:598179282226:web:3e46a7952edd9f17652b2b"
};

const app = initializeApp(firebaseConfig);

export const storage  = getStorage(app);

export async function uploadFile(file){
    const storageRef = ref(storage, v4());
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}