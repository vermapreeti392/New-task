import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD7ITUWCg9VAsi0mkagElHvmILb-G_WGgA",
  authDomain: "employee-83670.firebaseapp.com",
  projectId: "employee-83670",
  storageBucket: "employee-83670.appspot.com",
  messagingSenderId: "682572614030",
  appId: "1:682572614030:web:c75bbdd3e0d752f3da7cdf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(); 
export {app,auth};