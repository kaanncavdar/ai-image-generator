// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEPuVwJn-4LlDU4FPIgGfrAVMilfot9Dw",
  authDomain: "ai-image-generator-937e6.firebaseapp.com",
  projectId: "ai-image-generator-937e6",
  storageBucket: "ai-image-generator-937e6.appspot.com",
  messagingSenderId: "356310050569",
  appId: "1:356310050569:web:7df7b97b74649ad2e795d8",
  measurementId: "G-6JQ3X53M0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);