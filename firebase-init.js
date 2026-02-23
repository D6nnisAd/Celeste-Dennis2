// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
// REPLACE THIS WITH YOUR ACTUAL FIREBASE CONFIG FROM CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyCDk7fswIYZrt2QQyPsVOsU2-6P43_u-ao",
  authDomain: "celeste-dennis.firebaseapp.com",
  projectId: "celeste-dennis",
  storageBucket: "celeste-dennis.firebasestorage.app",
  messagingSenderId: "1018038551574",
  appId: "1:1018038551574:web:e39c17edb32d9f2c84a137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
