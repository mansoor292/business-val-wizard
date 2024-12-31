import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { GET_TEAM_MEMBERS } from "../graphql/queries/team-members";
import { AuthUser, AuthCredentials } from "./types";
import { executeGraphQL } from "../graphql/actions";
import type { GetTeamMembersQuery, GetTeamMembersQueryVariables, TeamMember } from "../graphql/generated/graphql";

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
          // Get all team members
          const data = await executeGraphQL<GetTeamMembersQuery, GetTeamMembersQueryVariables>({
            query: GET_TEAM_MEMBERS
          });

          // Find user by email
          const teamMember = data.teamMembers?.find(
            (member: TeamMember) => member.email.toLowerCase() === creds.email.toLowerCase()
          );

          if (!teamMember) {
            throw new Error('No user found with this email');
          }

          // Convert TeamMember to AuthUser
          const user: AuthUser = {
            ...teamMember,
            emailVerified: new Date(),
            passwordHash: 'mock-hash', // In a real app, we'd have proper password handling
          };

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
        session.user = token.user as AuthUser;
      }
      return session;
    },
  },
};
