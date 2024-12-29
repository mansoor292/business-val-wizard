import NextAuth from "next-auth"
import { authConfig } from "./lib/auth/auth.config"

// Export middleware config
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

// Export middleware function
export default NextAuth(authConfig).auth
