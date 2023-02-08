// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3VJhK13wqyBbiwx0nLno5sUTEar4IgT0",
  authDomain: "todo-7f03b.firebaseapp.com",
  projectId: "todo-7f03b",
  storageBucket: "todo-7f03b.appspot.com",
  messagingSenderId: "140599555923",
  appId: "1:140599555923:web:c526f781b76ba2423e93a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);