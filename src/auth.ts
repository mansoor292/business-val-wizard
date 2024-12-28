import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { User } from "next-auth"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req): Promise<User | null> {
        const username = credentials?.username
        const password = credentials?.password

        // Mock authentication - accept any username/password
        if (typeof username === 'string' && typeof password === 'string') {
          const user: User = {
            id: "1",
            name: username,
            email: `${username}@example.com`,
          }
          return user
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
})
