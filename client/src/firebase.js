// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-6bcb9.firebaseapp.com",
  projectId: "real-estate-6bcb9",
  storageBucket: "real-estate-6bcb9.appspot.com",
  messagingSenderId: "646018025765",
  appId: "1:646018025765:web:532843700e6b4d4ddfb2cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);