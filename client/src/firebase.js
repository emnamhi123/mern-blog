// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-933c5.firebaseapp.com",
  projectId: "mern-blog-933c5",
  storageBucket: "mern-blog-933c5.appspot.com",
  messagingSenderId: "947943128878",
  appId: "1:947943128878:web:9ad1d40c956c03f8d904bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);