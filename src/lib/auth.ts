import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next'
import { getServerSession, NextAuthOptions } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

export const config: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const userCustom = user as {
          id?: string
          email?: string
          name?: string
          avatar?: string
          token?: string
        }

        // Adicione as propriedades desejadas ao token
        token.token = userCustom.token
        token.email = userCustom.email
        token.name = userCustom.name
        token.avatar = userCustom.avatar
      }
      return token
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          email: token.email,
          name: token.name,
          avatar: token.picture,
          token,
        },
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  pages: {
    signIn: '/dashboard',
  },
} satisfies NextAuthOptions

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}
