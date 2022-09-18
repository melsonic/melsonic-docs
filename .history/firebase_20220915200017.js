/* import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDlVsqRFf3Tt6VljeVCeDHDZL6FVcE_HFs",
  authDomain: "melsonic-docs.firebaseapp.com",
  projectId: "melsonic-docs",
  storageBucket: "melsonic-docs.appspot.com",
  messagingSenderId: "1083270877079",
  appId: "1:1083270877079:web:07567ecef59fea042bbed2"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db }; */

// import { GoogleAuthProvider } from "firebase/auth";


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDlVsqRFf3Tt6VljeVCeDHDZL6FVcE_HFs",
  authDomain: "melsonic-docs.firebaseapp.com",
  projectId: "melsonic-docs",
  storageBucket: "melsonic-docs.appspot.com",
  messagingSenderId: "1083270877079",
  appId: "1:1083270877079:web:07567ecef59fea042bbed2"
};

const app = initializeApp(firebaseConfig);