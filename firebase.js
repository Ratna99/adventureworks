// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpWjjt5Zi3tTuIF7dnCFuNU7oBgBTDNl8",
  authDomain: "adventure-works-d287e.firebaseapp.com",
  projectId: "adventure-works-d287e",
  storageBucket: "adventure-works-d287e.appspot.com",
  messagingSenderId: "969202953366",
  appId: "1:969202953366:web:519f974f5df7d0f3d1a6b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore(app);

export {
  auth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
};
