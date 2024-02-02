// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi9Yg_f2W5PlhyrmarTAv5SEhgyktT3jI",
  authDomain: "fir-9b937.firebaseapp.com",
  projectId: "fir-9b937",
  storageBucket: "fir-9b937.appspot.com",
  messagingSenderId: "296143736495",
  appId: "1:296143736495:web:c83e4498a967b8c77f4e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}