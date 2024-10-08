import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEPuVwJn-4LlDU4FPIgGfrAVMilfot9Dw",
  authDomain: "ai-image-generator-937e6.firebaseapp.com",
  projectId: "ai-image-generator-937e6",
  storageBucket: "ai-image-generator-937e6.appspot.com",
  messagingSenderId: "356310050569",
  appId: "1:356310050569:web:7df7b97b74649ad2e795d8",
  measurementId: "G-6JQ3X53M0K"
};

// const firebaseConfig = {
//   apiKey: "APİ_KEY",
//   authDomain: "ai-image-generator-937e6.firebaseapp.com",
//   projectId: "ai-image-generator-937e6",
//   storageBucket: "ai-image-generator-937e6.appspot.com",
//   messagingSenderId: "356310050569",
//   appId: "APP_ID",
//   measurementId: "G-6JQ3X53M0K"
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };
