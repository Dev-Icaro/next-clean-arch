import "reflect-metadata";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import ICredentialsDTO from "@/modules/auth/domain/dtos/credentials.dto";

import { authenticate } from "./app/(auth)/auth.actions";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as ICredentialsDTO;

        const { accessToken } = await authenticate({
          email,
          password,
        });

        if (accessToken) {
          return {
            email,
            password,
            accessToken,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
});
