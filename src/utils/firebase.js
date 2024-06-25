// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyOGZiw5KZsnFWz12IQWPnwjpm9ravEY",
  authDomain: "react-fa52f.firebaseapp.com",
  projectId: "react-fa52f",
  storageBucket: "react-fa52f.appspot.com",
  messagingSenderId: "599942567650",
  appId: "1:599942567650:web:d83e60e620e6360c9a30bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
