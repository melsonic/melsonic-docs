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
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { db } from "../../../firebase.config"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    db: db
  }),
})