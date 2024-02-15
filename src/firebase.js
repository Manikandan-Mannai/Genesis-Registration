// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBbdjXPBxt-DBcJWft4JtEZA7Y-150pz88",
    authDomain: "file-upload-9bc2d.firebaseapp.com",
    projectId: "file-upload-9bc2d",
    storageBucket: "file-upload-9bc2d.appspot.com",
    messagingSenderId: "765069543825",
    appId: "1:765069543825:web:502cb226205133d0983230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)