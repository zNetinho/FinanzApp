import NextAuth from "next-auth";
import GitHub from './node_modules/@auth/core/providers/github';
import Google from './node_modules/@auth/core/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  callbacks: {
    jwt: ({ token, session, user, profile  }) => {
      console.log("Dados do jwt", profile)
      if (session) {
        console.log("Ebaa")
        const userCustom = user as {
          id?: string;
          email?: string;
          name?: string;
          avatar?: string;
          token?: string
      };
      // Adicione as propriedades desejadas ao token
        token.email = userCustom.email;
        token.name = userCustom.name;
        token.picture = userCustom.avatar;
        token.email = userCustom.email;
        return token
      }
      console.log("iiih")
      return token
    },
    session: async ({ session, token }) => {
      // a sessão tá saindo daqui
      console.log("Dados da session", token)
      console.log(session)
      return {
        ...session,
        user: {
          name: session.user.name,
          image: session.user.image
        }
      }
    },
    async signIn() {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        return false
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  session: {
    strategy: 'jwt', // Use JWT strategy for sessions
    maxAge: 30 * 60, // Set session expiration (optional)
  },
})