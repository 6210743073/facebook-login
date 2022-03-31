// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY5cyJLCsM-je9QD_HDWwj3SAFX4dsFTE",
    authDomain: "facebook-login-a5a6e.firebaseapp.com",
    projectId: "facebook-login-a5a6e",
    storageBucket: "facebook-login-a5a6e.appspot.com",
    messagingSenderId: "939783254488",
    appId: "1:939783254488:web:9a582774870e509d9942ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 