import NextAuth from "next-auth/next"
import bcrypt from "bcrypt"
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { NextAuthOptions } from "next-auth"

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password"},
        email: {label: "Email", type: "email"}
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })
        if (!user) {
          return null
        }

        // password check
        const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)

        if (!passwordsMatch) {
          return null
        } else {
          return user
        }
      }
    })
  ],
  session: {
    strategy: "jwt", // using json web tokens
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development"
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }