// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWx1gdVMc6hFF9mOk27xRW_jixUEXZBYo",
  authDomain: "netflix-7fc39.firebaseapp.com",
  projectId: "netflix-7fc39",
  storageBucket: "netflix-7fc39.appspot.com",
  messagingSenderId: "577357900676",
  appId: "1:577357900676:web:eab05fb17a0e4898f3cbd1",
  measurementId: "G-MVNM02CE4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();