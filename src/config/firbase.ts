// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiSvzWlOs87s52dTSrMkpQIvxluU7WorA",
  authDomain: "finance-managament.firebaseapp.com",
  projectId: "finance-managament",
  storageBucket: "finance-managament.appspot.com",
  messagingSenderId: "510286771022",
  appId: "1:510286771022:web:8c5ecdef3645233f9aa41f",
  measurementId: "G-MZB5NMN4ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
