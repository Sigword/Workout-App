// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpcWyxs-WjmRMfFw-PilMlfcmmExKLMhc",
  authDomain: "workout-app-f3dff.firebaseapp.com",
  projectId: "workout-app-f3dff",
  storageBucket: "workout-app-f3dff.appspot.com",
  messagingSenderId: "307855391568",
  appId: "1:307855391568:web:d35650cdeaaa612dd58a55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(authentication, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(authentication, email, password);
};

export const logout = () => {
  return signOut(authentication);
};

//Custom Hook
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(authentication, (user) => {
      setCurrentUser(user);
      return unsub;
    });
  }, []);

  return currentUser;
};
