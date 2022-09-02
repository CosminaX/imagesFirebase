import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuodd6FUYOQ_D7YNNYD8R732CN9vlGceQ",
  authDomain: "uploadingfile-cc771.firebaseapp.com",
  projectId: "uploadingfile-cc771",
  storageBucket: "uploadingfile-cc771.appspot.com",
  messagingSenderId: "325444208111",
  appId: "1:325444208111:web:60b38b072f9d6de308621a",
  measurementId: "G-1K58WG3FBQ",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
