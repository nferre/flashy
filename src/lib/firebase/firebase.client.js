import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth';
import { browser } from '$app/environment';

export let fdb;
export let rtdb;
export let app;
export let auth;

const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
     databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
};

export const initializeFirebase = () => {
 if (!browser) {
  throw new Error("Can't use the Firebase client on the server.");
 }
 if (!app) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  fdb = getFirestore(app);
  rtdb = getDatabase(app);
 }
};
