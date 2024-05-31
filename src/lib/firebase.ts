import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBh1xZHldl8A3iclYeH_G8C8fNy9Dx26Ow",
  authDomain: "encryptid-offline.firebaseapp.com",
  projectId: "encryptid-offline",
  storageBucket: "encryptid-offline.appspot.com",
  messagingSenderId: "369321917089",
  appId: "1:369321917089:web:a25b1954f18bac9ce38ee0",
  measurementId: "G-LM46YV05YK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
