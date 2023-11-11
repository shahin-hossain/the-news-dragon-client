// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiy9Zpm1AJLlrr66MaMEU7yrSiWkpVCkM",
    authDomain: "the-news-dragon-b3f87.firebaseapp.com",
    projectId: "the-news-dragon-b3f87",
    storageBucket: "the-news-dragon-b3f87.appspot.com",
    messagingSenderId: "337753681101",
    appId: "1:337753681101:web:ff0fe7fc537258579dcd84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;