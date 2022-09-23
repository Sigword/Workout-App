import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA3bujV-ogKWRQOLS-y1ck6e_X2iKaMFAA",
  authDomain: "gigachad-workout-app.firebaseapp.com",
  projectId: "gigachad-workout-app",
  storageBucket: "gigachad-workout-app.appspot.com",
  messagingSenderId: "222197614398",
  appId: "1:222197614398:web:d91efc963ce9cc5b690e6f",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
