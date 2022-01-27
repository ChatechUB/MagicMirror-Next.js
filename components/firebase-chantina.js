import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
	apiKey: "AIzaSyCNBcLGHvEs5JAFc0XSGbNBanyi-kKhw2g",
	authDomain: "fir-test-5d0fa.firebaseapp.com",
	projectId: "fir-test-5d0fa",
	storageBucket: "fir-test-5d0fa.appspot.com",
	messagingSenderId: "243559034407",
	appId: "1:243559034407:web:e7f653ecfbc3a33fc0e802",
	measurementId: "G-LBTESEHKJV"
});
const db = getFirestore();
const auth = getAuth();

export { db, auth };