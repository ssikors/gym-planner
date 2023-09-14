import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: any) {
  const body = await request.json()
  const { name } = body.data

  if (!name) {
    return new NextResponse("Missing name", {status: 400});
  }

  const exists = await prisma.excercise.findFirst({
    where: {
      name: name
    }
  })

  if (exists) {
    return new NextResponse("Excercise already added", {status: 400})
  }

  const excercise = await prisma.excercise.create({
    data: {
      name
    }
  })

  return NextResponse.json(excercise)
}