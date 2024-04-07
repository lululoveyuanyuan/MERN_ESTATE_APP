// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-26f0c.firebaseapp.com",
  projectId: "mern-estate-26f0c",
  storageBucket: "mern-estate-26f0c.appspot.com",
  messagingSenderId: "606066392186",
  appId: "1:606066392186:web:f9ec71e0c9ffb892fa4fc3",
  measurementId: "G-30LHSQ96HY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

