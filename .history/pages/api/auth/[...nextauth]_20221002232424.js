import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
// import {db} from "../../../firebase"

import { initializeApp, getApp, getApps } from "firebase/app"
import 'firebase/auth'
import { getFirestore, collection, getDocs, initializeFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlVsqRFf3Tt6VljeVCeDHDZL6FVcE_HFs",
  authDomain: "melsonic-docs.firebaseapp.com",
  projectId: "melsonic-docs",
  storageBucket: "melsonic-docs.appspot.com",
  messagingSenderId: "1083270877079",
  appId: "1:1083270877079:web:07567ecef59fea042bbed2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app)

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        console.log("sign ined")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  secret: process.env.SECRET,
  adapter: FirestoreAdapter({
    apiKey: "AIzaSyDlVsqRFf3Tt6VljeVCeDHDZL6FVcE_HFs",
    authDomain: "melsonic-docs.firebaseapp.com",
    projectId: "melsonic-docs",
    storageBucket: "melsonic-docs.appspot.com",
    messagingSenderId: "1083270877079",
    appId: "1:1083270877079:web:07567ecef59fea042bbed2",
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    // Optional emulator config (see below for options)
    emulator: {},
  }),
  adapter: FirestoreAdapter(db),
  database: process.env.FIREBASE_DATABASE_URL,
});


