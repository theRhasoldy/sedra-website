// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtDIEWPQ2w3z03jLhuK2nYKatYEMC9jeM",
  authDomain: "sedra-website.firebaseapp.com",
  projectId: "sedra-website",
  storageBucket: "sedra-website.appspot.com",
  messagingSenderId: "733268222596",
  appId: "1:733268222596:web:cdc00f877c9afdabc618d1",
  measurementId: "G-G799GLBLPJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
