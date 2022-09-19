import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCDAG669JpSW8oqkU56QVptuTQdaHrbvb8",
    authDomain: "makeup-mrial.firebaseapp.com",
    projectId: "makeup-mrial",
    storageBucket: "makeup-mrial.appspot.com",
    messagingSenderId: "842310715807",
    appId: "1:842310715807:web:4e122e44ad30d4f51795aa"
};
const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app);

