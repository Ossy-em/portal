// utils/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAW-t-ZKFU9mT2wm1C0uA5KyrnDV8IRtS4",
    authDomain: "nsc-staff-request-portal.firebaseapp.com",
    projectId: "nsc-staff-request-portal",
    storageBucket: "nsc-staff-request-portal.appspot.com",
    messagingSenderId: "565078357654",
    appId: "1:565078357654:web:14c60311f380f95cdcb4b7",
    measurementId: "G-2HY6P6LHDW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };