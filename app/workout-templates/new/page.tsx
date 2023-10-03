'use client'

import { LoginStatusWrapper } from "@/app/components/LoginStatusWrapper";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { TemplateEdit } from "@/app/components/workout-templates/TemplateEdit";
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

        <TemplateEdit excercises={excercises} />
        <Footer />
      </div>
    </LoginStatusWrapper>
  );
}
