/* import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { db } from "../../../firebase.config.js"
import * as firestoreFunctions from "firebase/firestore"


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
    db: db,
    // ...firestoreFunctions,
  }),
  database: process.env.FIREBASE_DATABASE_URL,
});


 */

import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { initializeApp, getApp, getApps } from "firebase/app"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  limit,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  runTransaction
} from "firebase/firestore"

// firebase config
const firebaseConfig = {
  projectId: "melsonic-docs",
  apiKey: "AIzaSyDlVsqRFf3Tt6VljeVCeDHDZL6FVcE_HFs",
  authDomain: "melsonic-docs.firebaseapp.com",
  storageBucket: "melsonic-docs.appspot.com",
  messagingSenderId: "1083270877079",
  appId: "1:1083270877079:web:07567ecef59fea042bbed2"
}

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // Optional emulator config (see below for options)
    emulator: {},
  })
})