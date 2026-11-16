// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBavC_JI4RSh8FoDPuRiHtDyQCOJ0d9Cik",
  authDomain: "registration-auth-7de5a.firebaseapp.com",
  projectId: "registration-auth-7de5a",
  storageBucket: "registration-auth-7de5a.firebasestorage.app",
  messagingSenderId: "403522342829",
  appId: "1:403522342829:web:0b27ae89dee410890b9b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);