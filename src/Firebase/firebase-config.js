// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqghYTsAmfOb2cgKs-qyzaUy5qExP0mK0",
  authDomain: "dragon-news-auth-project-69814.firebaseapp.com",
  projectId: "dragon-news-auth-project-69814",
  storageBucket: "dragon-news-auth-project-69814.appspot.com",
  messagingSenderId: "185872411287",
  appId: "1:185872411287:web:27d042a0bc98166da197d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);