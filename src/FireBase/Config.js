import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCo9yoLE_MaEK2YGRk1xlbrw2i6BtOaIno",
    authDomain: "enterfix-460d9.firebaseapp.com",
    projectId: "enterfix-460d9",
    storageBucket: "enterfix-460d9.appspot.com",
    messagingSenderId: "302650991750",
    appId: "1:302650991750:web:b030310033bfa7a80d1d07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);