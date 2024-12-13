// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB7KJrT9riTMAQJrEnHeb_tjW-fA7BbMI",
  authDomain: "chat2-150f4.firebaseapp.com",
  projectId: "chat2-150f4",
  storageBucket: "chat2-150f4.firebasestorage.app",
  messagingSenderId: "262806407396",
  appId: "1:262806407396:web:e6df5692dc8e1e76e784f1",
  measurementId: "G-Z3PBF5RHD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app