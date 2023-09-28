// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArdHNQk1LiVN07tM1gjeSudiBuMnqnWWk",
  authDomain: "restaurante-db112.firebaseapp.com",
  projectId: "restaurante-db112",
  storageBucket: "restaurante-db112.appspot.com",
  messagingSenderId: "946559838708",
  appId: "1:946559838708:web:8ca7ff9511ca249abe31a1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore()
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()