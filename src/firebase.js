import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx20vd1HL862FpWhLFvqmtAkknYe_saUo",
  authDomain: "yeetflex-1d350.firebaseapp.com",
  projectId: "yeetflex-1d350",
  storageBucket: "yeetflex-1d350.appspot.com",
  messagingSenderId: "613080385673",
  appId: "1:613080385673:web:e2c597475ca7bbf5085e58",
  measurementId: "G-8TXRNRL3ZR",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const authMe = getAuth();
const authGoogle = new GoogleAuthProvider();

export { authMe, authGoogle };
export default db;
