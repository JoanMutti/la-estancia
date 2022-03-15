// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

console.log(import.meta.env);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

let envProcess;
console.log(process.env);
import.meta?.env ? (envProcess = import.meta.env) : (envProcess = process?.env);

//firebase config
const firebaseConfig = {
  apiKey: envProcess.VITE_API_KEY,
  authDomain: envProcess.VITE_AUTH_DOMAIN,
  projectId: envProcess.VITE_PROJECT_ID,
  storageBucket: envProcess.VITE_STORAGE_BUCKET,
  messagingSenderId: envProcess.VITE_MESSAGING_SENDER_ID,
  appId: envProcess.VITE_ID,
  measurementId: envProcess.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
// Inicializado el Google Analytics por si se quiere usar
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
