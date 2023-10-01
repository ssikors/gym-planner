
import prisma from "@/server/db/client";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

  const excercises = await prisma.excercise.findMany()

  return NextResponse.json(excercises)
}