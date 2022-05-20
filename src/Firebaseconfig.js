// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC7fzOO1_qa6RonXSkyQw2hN0MR9ttyV_I",
    authDomain: "muieeeweb.firebaseapp.com",
    projectId: "muieeeweb",
    storageBucket: "muieeeweb.appspot.com",
    messagingSenderId: "535845069782",
    appId: "1:535845069782:web:0e5f3dad9cfd213ec1fa77",
    measurementId: "G-MKF5Y9HXRK"
  };



const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);