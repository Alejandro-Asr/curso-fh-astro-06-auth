// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLPegK28MiEdgwXYS2q-tPFwB60kQXJK0',
  authDomain: 'astro-authentication-a9715.firebaseapp.com',
  projectId: 'astro-authentication-a9715',
  storageBucket: 'astro-authentication-a9715.firebasestorage.app',
  messagingSenderId: '860817078894',
  appId: '1:860817078894:web:8677eabe576f4f0a95447f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = { app, auth };
