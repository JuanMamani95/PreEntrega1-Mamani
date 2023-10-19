
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCdsPlVNCJWSc6rxE9g7XjnIlmoUXeil_k",
    authDomain: "nuestras-delicias.firebaseapp.com",
    projectId: "nuestras-delicias",
    storageBucket: "nuestras-delicias.appspot.com",
    messagingSenderId: "653133947391",
    appId: "1:653133947391:web:086803b5f51a79540347ca"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);