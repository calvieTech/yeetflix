// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx20vd1HL862FpWhLFvqmtAkknYe_saUo",
  authDomain: "yeetflex-1d350.firebaseapp.com",
  projectId: "yeetflex-1d350",
  storageBucket: "yeetflex-1d350.appspot.com",
  messagingSenderId: "613080385673",
  appId: "1:613080385673:web:e2c597475ca7bbf5085e58",
  measurementId: "G-8TXRNRL3ZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
