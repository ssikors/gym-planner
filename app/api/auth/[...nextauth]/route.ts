import NextAuth from "next-auth/next"
import bcrypt from "bcrypt"
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@auth/prisma-adapter"

export const authOptions = {
  adapter: PrismaAdapter
}