// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, addDoc, collection } from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpCWcJ71K1XtXLVc3OoasP41xXlibOLK8",
  authDomain: "magicmirror-next-js.firebaseapp.com",
  projectId: "magicmirror-next-js",
  storageBucket: "magicmirror-next-js.appspot.com",
  messagingSenderId: "375708415347",
  appId: "1:375708415347:web:085bd589e673ce3c2ec106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default {db, app};

