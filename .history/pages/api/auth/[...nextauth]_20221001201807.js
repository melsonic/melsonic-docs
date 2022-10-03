import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callback: {
    signIn(user, account, profile) {
        user.name = slug(user.email.slice(0, user.email.indexOf('@'))) // or whatever else
        return true
      }
  },
  adapter: FirestoreAdapter(db),
  secret: process.env.JWT_SECRET,
  database: process.env.FIREBASE_DATABASE_URL,
});

