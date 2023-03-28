import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCpZaTHsR8t7JZBaBLVVv7QNMMghHojo9s",
  authDomain: "apgpt-4188e.firebaseapp.com",
  projectId: "apgpt-4188e",
  databaseURL: "https://apgpt-4188e-default-rtdb.firebaseio.com",
  storageBucket: "apgpt-4188e.appspot.com",
  messagingSenderId: "73254476468",
  appId: "1:73254476468:web:56be8fc750318aad8915e1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);


