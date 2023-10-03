'use client'

import { LoginStatusWrapper } from "@/app/components/LoginStatusWrapper";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import prisma from "@/server/db/client";
import { useEffect, useState } from "react";
import { Excercise } from "@/app/admin-page/page";

export default function NewTemplate() {
  const [excercises, setExcercises] = useState<Excercise[]>([])

  useEffect(() => { getExcercises() }, [])

  const getExcercises = async () => {
    const response = await fetch("/api/get-excercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json()
    setExcercises(data)
  }

  return (
    <LoginStatusWrapper>
      <div className="w-full mt-24 flex flex-col text-white bg-slate-700  min-h-screen h-full items-center justify-start">
        <Header currentPage="Templates" />
        <h1 className="text-2xl mt-12">Add excercises to your template:</h1>
        <Footer />
      </div>
    </LoginStatusWrapper>
  );
}
