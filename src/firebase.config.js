
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFn1frfL9kemQVWk0ZpYpfPG5j5PSR1RA",
  authDomain: "house-marketplace-c99d0.firebaseapp.com",
  projectId: "house-marketplace-c99d0",
  storageBucket: "house-marketplace-c99d0.appspot.com",
  messagingSenderId: "311612666704",
  appId: "1:311612666704:web:b87a493315e2ebb5cb3255",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
