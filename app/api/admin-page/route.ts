import prisma from "@/server/db/client";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
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