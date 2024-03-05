import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { browser } from '$app/environment';

export let db;
export let app;
export let auth;

const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 appId: import.meta.env.VITE_FIREBASE_APP_ID,
 useEmulator: import.meta.env.VITE_FIREBASE_USE_EMULATOR === 'true',
 authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
 projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
 storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
 measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const initializeFirebase = () => {
 if (!browser) {
  throw new Error("Can't use the Firebase client on the server.");
 }
 if (!app) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);

  if (firebaseConfig.useEmulator) {
   connectAuthEmulator(auth, 'http://127.0.0.1:9099');
  }
 }
};
