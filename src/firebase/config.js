// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDawSDiZLjynQUl4s4obG2kR5t9hFYW13Q",
  authDomain: "e-commerce1-eb45f.firebaseapp.com",
  projectId: "e-commerce1-eb45f",
  storageBucket: "e-commerce1-eb45f.appspot.com",
  messagingSenderId: "742010898326",
  appId: "1:742010898326:web:e984241587676e3fbc3fb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)