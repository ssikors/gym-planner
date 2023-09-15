import bcrypt from "bcrypt";
import prisma from "@/server/db/client";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, password} = body.data

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email or password", {status: 400});
  }

  const exists = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if(exists) {
    return new NextResponse("This email has already been registered", {status: 400});
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword
    }
  })

  return NextResponse.json(user)
}