import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { generateMockTeamMembers } from "../mock/business-data";
import { AuthUser, AuthCredentials } from "./types";

// Initialize mock users from team members
const mockUsers: AuthUser[] = generateMockTeamMembers().map(member => ({
  ...member,
  id: crypto.randomUUID(),
  createdAt: new Date(),
  updatedAt: new Date(),
  emailVerified: new Date(),
  passwordHash: 'mock-hash' // In a real app, we'd have proper password hashing
}));

// This configuration is used by App Router
export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<AuthUser | null> {
        const creds = credentials as AuthCredentials;
        
        if (!creds?.email || !creds?.password) {
          return null;
        }

        // Find user by email
        const user = mockUsers.find(u => u.email.toLowerCase() === creds.email.toLowerCase());
        if (!user) {
          throw new Error('No user found with this email');
        }

        // In a real app, we'd verify the password hash
        return user;
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Include full user data in the token
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the full user data to the session
      if (token.user) {
        session.user = token.user as AuthUser;
      }
      return session;
    },
  },
};
