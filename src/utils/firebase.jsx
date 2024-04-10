// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBNZHFm0KbN6ueAB9lX0sAAXflSUwUutA",
  authDomain: "netflixgpt-9cad5.firebaseapp.com",
  projectId: "netflixgpt-9cad5",
  storageBucket: "netflixgpt-9cad5.appspot.com",
  messagingSenderId: "944343400223",
  appId: "1:944343400223:web:ffa5f3b65636e9cd48ba2a",
  measurementId: "G-KPHFLPS14V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
