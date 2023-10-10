
import prisma from "@/server/db/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { templateName, userEmail, excerciseSets } = body.data;

  if (!templateName || !userEmail || !excerciseSets) {
    return new NextResponse("Missing data", { status: 400 });
  }

  const user = await prisma.user.findFirst({ where: { email: userEmail } });
  const userId = user?.id

  if (!userId) {
    return new NextResponse("Error: cannot find user id", {status: 400})
  }

  const exists = await prisma.template.findFirst({where: { title: templateName, userId: userId }})

  if (exists) {
    return new NextResponse("A template by this name already exists", {status: 400})
  }

  return NextResponse.json(user);
}
