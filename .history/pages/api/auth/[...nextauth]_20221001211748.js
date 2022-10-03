import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import {db} from "../../../firebase"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callback: {
    signIn(user, account, profile) {
        user.name = slug(user.email.slice(0, user.email.indexOf('@'))) // or whatever else
        return true
      }
  },
  adapter: FirestoreAdapter(db),
  database: process.env.FIREBASE_DATABASE_URL,
});


