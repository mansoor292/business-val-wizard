import type { NextAuthConfig } from "next-auth";
import type { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface AuthCredentials {
  username: string;
  password: string;
}

export const authConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<User | null> {
        const creds = credentials as AuthCredentials;
        // Mock authentication - accept any username/password
        if (creds?.username && creds?.password) {
          return {
            id: "1",
            name: creds.username,
            email: `${creds.username}@example.com`,
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
