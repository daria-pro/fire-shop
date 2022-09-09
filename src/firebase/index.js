
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnISH6PUDVWEZiwRTs_a6mugynFwUpGDc",
  authDomain: "vue-shop-b0741.firebaseapp.com",
  projectId: "vue-shop-b0741",
  storageBucket: "vue-shop-b0741.appspot.com",
  messagingSenderId: "840999512004",
  appId: "1:840999512004:web:86f24f10ecaf1837e66691",
  measurementId: "G-8JZKH8KEC6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }