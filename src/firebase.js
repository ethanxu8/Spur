// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVZQwNHeN6_gr-OCusj73Jnn9TAzRfEnk",
  authDomain: "spur-2955f.firebaseapp.com",
  projectId: "spur-2955f",
  storageBucket: "spur-2955f.appspot.com",
  messagingSenderId: "199164361023",
  appId: "1:199164361023:web:28095dc035331fe323bb8a",
  measurementId: "G-RCWZ76WH7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app); // Initialize Firestore and export it
