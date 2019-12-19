import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjoAxKT2yWOYH9dRPQdRglPdB1mnofWAQ",
  authDomain: "socialape-8f851.firebaseapp.com",
  databaseURL: "https://socialape-8f851.firebaseio.com",
  projectId: "socialape-8f851",
  storageBucket: "socialape-8f851.appspot.com",
  messagingSenderId: "6531803332",
  appId: "1:6531803332:web:a47e93aee8c97d4b374191",
  measurementId: "G-YMG6BQ5EPH"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();

export const db = baseDb;

// Google singin provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Facebook Signin provider
export const fbProvider = new firebase.auth.FacebookAuthProvider();

//Get elements for authentication
export const btnGoogle = document.getElementById("btnGoogle");
export const btnFacebook = document.getElementById("btnFacebook");
//Register variables
export const btnLogout = document.getElementById("btnLogout");
