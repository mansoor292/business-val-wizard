import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { GET_USERS } from "../graphql/queries/users";
import { AuthUser, AuthCredentials } from "./types";
import { executeGraphQL } from "../graphql/actions";
import { GetUsersQuery, GetUsersQueryVariables } from "../graphql/generated/graphql";

// This configuration is used by App Router
export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<any> {
        const creds = credentials as AuthCredentials;
        
        if (!creds?.email || !creds?.password) {
          return null;
        }

        try {
          // Get all team members
          const data = await executeGraphQL<GetUsersQuery, GetUsersQueryVariables>({
            query: GET_USERS
          });

          // Find user by email
          const user = data.users?.find(
            (member) => member.email?.toLowerCase() === creds.email.toLowerCase()
          );

          if (!user) {
            throw new Error('No user found with this email');
          }

          // Return the user directly
          return {
            ...user,
            id: user.uId, // Required by NextAuth
            email: user.email || creds.email, // Ensure email is not null
            emailVerified: new Date() // Required by NextAuth
          };
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
    async session({ session, token }: { session: any, token: any }) {
      // Pass the full user data to the session
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};
