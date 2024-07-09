// import {
//   GetServerSidePropsContext,
//   NextApiRequest,
//   NextApiResponse,
// } from 'next'
// import { getServerSession } from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import GitHubProvider from 'next-auth/providers/github'

// export const config = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || '',
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID || '',
//       clientSecret: process.env.GITHUB_SECRET || '',
//     }),
//   ],
//   callbacks: {
//     jwt: ({ token, user, profile } ) => {
//       console.log("Dados do jwt",user)
//       if (profile) {
//         const userCustom = user as {
//           id?: string
//           email?: string
//           name?: string
//           avatar: string
//           token?: string
//         }

//         // Adicione as propriedades desejadas ao token
//         token.token = userCustom.token
//         token.email = userCustom.email
//         token.name = userCustom.name
//         token.avatar = userCustom.avatar
//         console.log(token)
//         return token
//       }
//       return {token, user, profile}
//     },
//     session: async ({ session, token, user }) => {      
//     // a sessão tá saindo daqui
//     console.log("Dados da session",user)
//     console.log(session)
//       return {
//         ...session,
//       }
//     },
//     async signIn() {
//       const isAllowedToSignIn = true
//       if (isAllowedToSignIn) {
//         return true
//       } else {
//         return false
//       }
//     },
//     async redirect({ url, baseUrl }) {
//       if (url.startsWith('/')) return `${baseUrl}${url}`
//       else if (new URL(url).origin === baseUrl) return url
//       return baseUrl
//     },
//   },
// } satisfies NextAuthOptions

// export function auth(
//   ...args:
//     | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
//     | [NextApiRequest, NextApiResponse]
//     | []
// ) {
//   return getServerSession(...args, config)
// }
