import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitter';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/db';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: '2.0',
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const userId = user.id;

      const dbUser = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });

      if (dbUser) {
        session.user.id = dbUser.id;
        session.user.name = dbUser.name;
        session.user.email = dbUser.email;
        session.user.image = dbUser.image;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
