import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const authMe = getAuth();
const authGoogle = new GoogleAuthProvider();

export { authMe, authGoogle };
export default db;
