// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCFVqSphPt_Ec8InUueZ72sUS-LhfyK1M",
  authDomain: "crudblogproject.firebaseapp.com",
  projectId: "crudblogproject",
  storageBucket: "crudblogproject.appspot.com",
  messagingSenderId: "241945599152",
  appId: "1:241945599152:web:94a8f9c8f563fa9d0d6f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();