// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpZaTHsR8t7JZBaBLVVv7QNMMghHojo9s",
  authDomain: "apgpt-4188e.firebaseapp.com",
  projectId: "apgpt-4188e",
  storageBucket: "apgpt-4188e.appspot.com",
  messagingSenderId: "73254476468",
  appId: "1:73254476468:web:56be8fc750318aad8915e1",
  measurementId: "G-8CR1R8CKEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
