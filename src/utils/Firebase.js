// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLVpHokt2z4KHmCQ8m2rw0gAKm4IFGbns",
  authDomain: "netflix-2f3b5.firebaseapp.com",
  projectId: "netflix-2f3b5",
  storageBucket: "netflix-2f3b5.appspot.com",
  messagingSenderId: "123330806823",
  appId: "1:123330806823:web:37ad447c0fd2a88e037a02",
  measurementId: "G-LDYCN5ZBTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();