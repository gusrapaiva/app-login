// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyTwSgmA15gJYzIat5AkWiw9ncosYBKZM",
  authDomain: "pizzaria-paraibabd.firebaseapp.com",
  projectId: "pizzaria-paraibabd",
  storageBucket: "pizzaria-paraibabd.appspot.com",
  messagingSenderId: "933342846049",
  appId: "1:933342846049:web:86fb1f43726e23415e1e20",
  measurementId: "G-NMPCLR53FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;