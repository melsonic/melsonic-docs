import firebase from 'firebase/app'
import { initializeApp } from "firebase/app/dist/app"
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

console.log(firebase)

var app;
if(firebase.getApps().length == 0){
  app = initializeApp(firebaseConfig);
}else{
  app = firebase.getApp();
}

const db = getFirestore(app);

export {db};