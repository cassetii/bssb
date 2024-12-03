
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkv3y80j7f3YpuB8kZzh-W8wCC-acvzRM",
  authDomain: "bssb-818bd.firebaseapp.com",
  projectId: "bssb-818bd",
  storageBucket: "bssb-818bd.firebasestorage.app",
  messagingSenderId: "1082713375228",
  appId: "1:1082713375228:web:7352ca908a49a5d123f279",
  measurementId: "G-Q7KWK8QSTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
