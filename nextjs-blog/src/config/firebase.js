// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnIeczIhwcoofN4x5iUgf07iO9nrkFFyI",
  authDomain: "razanm-561fd.firebaseapp.com",
  projectId: "razanm-561fd",
  storageBucket: "razanm-561fd.firebasestorage.app",
  messagingSenderId: "42328517683",
  appId: "1:42328517683:web:1051213d05962a58e88746",
  measurementId: "G-TCY44VYKTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};
export default app;