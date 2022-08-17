// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";

import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDCXp9AcAycKs9foD1VT2kwJjWT70cr4k",
    authDomain: "gbv-android-3af5f.firebaseapp.com",
    projectId: "gbv-android-3af5f",
    storageBucket: "gbv-android-3af5f.appspot.com",
    messagingSenderId: "384981181285",
    appId: "1:384981181285:web:09325fa3a56fa8ac05778c",
    measurementId: "G-DMB66MKBCQ"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// connectFirestoreEmulator(db, 'localhost', 8080);
export { db, firebase }; const analytics = getAnalytics(firebaseApp);

