// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8SVdJNUyeDNNZHUOl_0bZ6ji_Rg-SfT0",
  authDomain: "smartcradlesystem-otp-f2199.firebaseapp.com",
  projectId: "smartcradlesystem-otp-f2199",
  storageBucket: "smartcradlesystem-otp-f2199.appspot.com",
  messagingSenderId: "521702305809",
  appId: "1:521702305809:web:f48b519bd46f51d32141b0",
  measurementId: "G-RN6JEZQJ5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
