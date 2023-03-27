import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpZaTHsR8t7JZBaBLVVv7QNMMghHojo9s",
  authDomain: "apgpt-4188e.firebaseapp.com",
  projectId: "apgpt-4188e",
  storageBucket: "apgpt-4188e.appspot.com",
  messagingSenderId: "73254476468",
  appId: "1:73254476468:web:56be8fc750318aad8915e1",
  measurementId: "G-8CR1R8CKEG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

