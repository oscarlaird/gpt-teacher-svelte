import { writable } from 'svelte/store';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { auth } from './firebase';

export const user = writable(null);

signInAnonymously(auth)
  .then((userCredential) => {
    // You can use userCredential.user to access the anonymous user's data
  })
  .catch((error) => {
    console.error('Error signing in anonymously:', error);
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, you can access the user's data with the 'user' object
  } else {
    // User is signed out
  }
});
