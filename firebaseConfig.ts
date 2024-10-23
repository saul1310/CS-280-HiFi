// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVD75dLxMjrqiZRFYNY5i8zU-k1TqszwU",
  authDomain: "cs280-b9aa6.firebaseapp.com",
  projectId: "cs280-b9aa6",
  storageBucket: "cs280-b9aa6.appspot.com",
  messagingSenderId: "155233489147",
  appId: "1:155233489147:web:c085296ccd7b132f9de05e",
  measurementId: "G-HJ80YGVGN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app); // Initialize and export auth
