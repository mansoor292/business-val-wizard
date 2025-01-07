import { auth } from "./auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnLoginPage = req.nextUrl.pathname.startsWith('/login')
  
  // If user is logged in and tries to access login page,
  // redirect them to the home page
  if (isLoggedIn && isOnLoginPage) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // If user is not logged in and tries to access protected pages,
  // redirect them to login page
  if (!isLoggedIn && !isOnLoginPage && !req.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
})

// Optionally configure middleware matcher
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
