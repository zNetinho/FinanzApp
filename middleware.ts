/* eslint-disable react-hooks/rules-of-hooks */
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { signOut } from 'next-auth/react'
import { NextResponse } from 'next/server'

const middleware = async (request: NextRequestWithAuth) => {
  console.log('[MIDDLEWARE_NEXTAUTH_TOKEN]: ', request.nextauth.token)

  const isPrivateRoutes = request.nextUrl.pathname.startsWith('/dashboard')

  if (isPrivateRoutes) {
    return NextResponse.rewrite(new URL('/auth/signin', request.url))
  }

  if (request.nextUrl.pathname === '/logout') {
    await signOut()
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }
}

// const callbackOptions: NextAuthMiddlewareOptions = {
//   callbacks: {
//     authorized({ req, token }) {
//       if (token) return true // If there is a token, the user is authenticated
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {},
// }

export default withAuth(middleware)

export const config = {
  matcher: ['/dashboard'],
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
