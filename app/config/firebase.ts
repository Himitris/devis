import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjh55ZIGSq-U6gEKGFs5XKgOa5FthwCZw",
  authDomain: "devis-d2a4f.firebaseapp.com",
  projectId: "devis-d2a4f",
  storageBucket: "devis-d2a4f.firebasestorage.app",
  messagingSenderId: "749004955819",
  appId: "1:749004955819:web:f0a6d75c574671b39bd7ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
export const auth = getAuth(app);

// Get Firestore instance
export const db = getFirestore(app);

export default app;