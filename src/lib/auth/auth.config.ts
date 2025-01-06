import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { GET_USERS } from "../graphql/queries/users";
import { AuthUser, AuthCredentials } from "./types";
import { print } from 'graphql';

const GRAPHQL_URL = process.env.GRAPHQL_URL || "http://localhost:4000/graphql";

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

        try {
          // Direct GraphQL request without auth token
          const res = await fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: print(GET_USERS),
            }),
          });

          if (!res.ok) {
            throw new Error('GraphQL request failed');
          }

          const json = await res.json();
          
          if (json.errors) {
            throw new Error(
              `GraphQL Error: ${json.errors.map((e: Error) => e.message).join(', ')}`
            );
          }

          // Find user by email
          const user = json.data.users?.find(
            (member: any) => member.email?.toLowerCase() === creds.email.toLowerCase()
          );

          if (!user) {
            throw new Error('No user found with this email');
          }

          // In a real app, we'd verify the password hash
          return user;
        } catch (error) {
          console.error('Error during authentication:', error);
          return null;
        }
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
        session.user = token.user;
      }
      return session;
    },
  },
};
