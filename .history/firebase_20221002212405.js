import { initializeApp, getApp, getApps } from "firebase/app"
import 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlVsqRFf3Tt6VljeVCeDHDZL6FVcE_HFs",
  authDomain: "melsonic-docs.firebaseapp.com",
  projectId: "melsonic-docs",
  storageBucket: "melsonic-docs.appspot.com",
  messagingSenderId: "1083270877079",
  appId: "1:1083270877079:web:07567ecef59fea042bbed2"
};

const app = !getApps().length ? initializeApp("melsonic-docs") : getApp();

// const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export {db};