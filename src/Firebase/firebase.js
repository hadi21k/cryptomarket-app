import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdOQB3nesYv-52DKvwVSPK6XtStrleV8w",
  authDomain: "cryptoverse-16b18.firebaseapp.com",
  projectId: "cryptoverse-16b18",
  storageBucket: "cryptoverse-16b18.appspot.com",
  messagingSenderId: "253830227063",
  appId: "1:253830227063:web:0f6552fe2abd9bcae01272",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signIn = () => signInWithPopup(auth, googleProvider);
