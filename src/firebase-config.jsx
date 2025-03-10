// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCelFg8UCPjdu35vb30ShS5riga4g8Jjcc",
  authDomain: "react-firebase-efbc9.firebaseapp.com",
  projectId: "react-firebase-efbc9",
  storageBucket: "react-firebase-efbc9.firebasestorage.app",
  messagingSenderId: "1077797413718",
  appId: "1:1077797413718:web:e0b0f685c6ce338b9becf7",
  measurementId: "G-XBK6ZP50C1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
