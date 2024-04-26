import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
// 	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
// 	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// 	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
// 	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: import.meta.env.VITE_FIREBASE_APP_ID,
// 	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };


const firebaseConfig = {
	apiKey: "AIzaSyBlnAI9JyjxywODTGkRMRUN28aadStYBBk",
	authDomain: "insta-clone-59ae5.firebaseapp.com",
	projectId: "insta-clone-59ae5",
	storageBucket: "insta-clone-59ae5.appspot.com",
	messagingSenderId: "5801343798",
	appId: "1:5801343798:web:9bcc8766b224d6e52b9197",
	measurementId: "G-87K24F8YJR"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
