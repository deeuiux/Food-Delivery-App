import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAo2lggfkGxiBCs6aSir5LFI2K_tJPgWyo",
  authDomain: "food-ed860.firebaseapp.com",
  projectId: "food-ed860",
  storageBucket: "food-ed860.appspot.com",
  messagingSenderId: "1098840407644",
  appId: "1:1098840407644:web:410f35b889528fefeb3099"
};

export const app = initializeApp(firebaseConfig);