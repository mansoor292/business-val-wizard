import NextAuth from "next-auth"
import { authConfig } from "./lib/auth/auth.config"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
})
