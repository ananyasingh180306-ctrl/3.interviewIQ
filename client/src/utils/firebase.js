import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,

  authDomain: "interviewagent-45a1d.firebaseapp.com",
  projectId: "interviewagent-45a1d",
  storageBucket: "interviewagent-45a1d.firebasestorage.app",
  messagingSenderId: "925919708382",
  appId: "1:925919708382:web:0b20ff3e12a9197d352e4f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
