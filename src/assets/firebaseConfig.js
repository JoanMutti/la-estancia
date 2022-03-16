// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC-p7WbsKoe3okuuO36_FcBYDAoj5ZzNrY",
//   authDomain: "granja-la-estancia.firebaseapp.com",
//   projectId: "granja-la-estancia",
//   storageBucket: "granja-la-estancia.appspot.com",
//   messagingSenderId: "834056927309",
//   appId: "1:834056927309:web:6331f378f132245b0b0404",
//   measurementId: "G-FY52527J13"
// };

// // Initialize Firebase
// // Inicializado el Google Analytics por si se quiere usar
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// const db = getFirestore(app);

// export default db

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || process.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || process.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID || process.env.VITE_PROJECT_ID,
  storageBucket:
    import.meta.env.VITE_STORAGE_BUCKET || process.env.VITE_STORAGE_BUCKET,
  messagingSenderId:
    import.meta.env.VITE_MESSAGING_SENDER_ID ||
    process.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_ID || process.env.VITE_ID,
  measurementId:
    import.meta.env.VITE_MEASUREMENT_ID || process.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
// Inicializado el Google Analytics por si se quiere usar
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
