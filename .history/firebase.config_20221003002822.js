import { initializeApp, getApp, getApps } from "firebase/app"
import 'firebase/auth'
import { getFirestore, collection, getDocs, initializeFirestore } from 'firebase/firestore/lite'
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlVsqRFf3Tt6VljeVCeDHDZL6FVcE_HFs",
  authDomain: "melsonic-docs.firebaseapp.com",
  projectId: "melsonic-docs",
  storageBucket: "melsonic-docs.appspot.com",
  messagingSenderId: "1083270877079",
  appId: "1:1083270877079:web:07567ecef59fea042bbed2"
};

const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();

// const app = initializeApp(firebaseConfig)

// const db = getFirestore(app);
const db = initializeFirestore(app);

const storage = getStorage(app);

export {app, db, storage};