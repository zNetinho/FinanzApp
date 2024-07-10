import NextAuth from "next-auth";
import GitHub from './node_modules/@auth/core/providers/github';
import Google from './node_modules/@auth/core/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  callbacks: {
    jwt: ({ token, user, profile  }) => {
      if (!profile) {
        console.warn("Profile information not available from provider.");
        return token; // Retorna o token sem alterações se o Provider não tiver 'profile'
      }

      // Extraindo infos relevante do profile (customize para sua necessidade.)
      const userCustom = {
        id: user?.id || profile?.id,
        email: profile?.email,
        name: profile?.name,
        avatar: profile?.image,
        reposUrl: profile.repos_url
      };

      // Criando a propriedade user e devolvendo o token.
      token.user = userCustom;
      return token;
    },
    session: async ({ session, token, user }) => {
      return {
        ...session,
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