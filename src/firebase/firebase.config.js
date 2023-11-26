// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/**
 * ENVIRONMENT VARIABLE
 * ----------------------
 * firebase environment variable এর কাজ হলো  firebase config গুলো secure করা। 
 * তবে এটা ১০০% secure না। তবে এই config গুলো github এ পাঠানো উচিৎ না। সার্ভার সাইটেরা সবচেয়ে secure।
 * github এ যেন না পাঠাতে হয় তাই এগুলো environment variable এর মধ্যে রাখা ভালো।  
 * local এ config রাখতে চাইলে (.env.local) file এর মধ্যে রাখতে হবে। 
 * production এর জন্য (.env.production) file এর মধ্যে রাখতে হবে।
 * server side এ environment variable use করা হল সবচাইতে save.
 */

console.log('Environment variable', import.meta.env.VITE_apiKey)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;