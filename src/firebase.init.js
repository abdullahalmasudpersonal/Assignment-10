// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtGRNw6XQvL-Cj60UE6XLCMYaatSxcrrU",
    authDomain: "fstoppers.firebaseapp.com",
    projectId: "fstoppers",
    storageBucket: "fstoppers.appspot.com",
    messagingSenderId: "885170159118",
    appId: "1:885170159118:web:61271c96f7f71ab77a865f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;