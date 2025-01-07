import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { User } from "next-auth"
import { 
  CognitoIdentityProviderClient, 
  InitiateAuthCommand,
  InitiateAuthCommandInput
} from "@aws-sdk/client-cognito-identity-provider"

const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION || 'us-east-1'
});

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  debug: true,
  basePath: "/api/auth",
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: Record<string, unknown>): Promise<User | null> {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) {
          return null;
        }

        try {
          const params: InitiateAuthCommandInput = {
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: process.env.COGNITO_CLIENT_ID!,
            AuthParameters: {
              USERNAME: email,
              PASSWORD: password
            }
          };

          const command = new InitiateAuthCommand(params);
          const response = await cognitoClient.send(command);
          
          if (response.AuthenticationResult?.AccessToken) {
            const user: User & { accessToken?: string } = {
              id: email,
              name: email.split('@')[0],
              email: email,
              accessToken: response.AuthenticationResult.AccessToken,
            };
            return user;
          }
          return null;
        } catch (error) {
          console.error("Cognito auth error:", error);
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
      if (user && 'accessToken' in user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        (session as any).accessToken = token.accessToken;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
})
