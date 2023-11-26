// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgOB2xdDFLidWkh1mUMEfNnUbHkS8W4FQ",
  authDomain: "booking-project-63a4c.firebaseapp.com",
  projectId: "booking-project-63a4c",
  storageBucket: "booking-project-63a4c.appspot.com",
  messagingSenderId: "14131243052",
  appId: "1:14131243052:web:9cd51ef0b23bd2a1ecc989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFireStore();

export {auth,db}