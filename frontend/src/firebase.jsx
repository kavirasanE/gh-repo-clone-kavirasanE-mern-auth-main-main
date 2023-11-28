// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c3268.firebaseapp.com",
  projectId: "mern-auth-c3268",
  storageBucket: "mern-auth-c3268.appspot.com",
  messagingSenderId: "333162342481",
  appId: "1:333162342481:web:14fa3e1ea094872aebb070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 