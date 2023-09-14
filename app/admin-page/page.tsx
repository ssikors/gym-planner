"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

type Excercise = {
  name: string
}

const excercises = [
  {
    name: "Pushup",
  },
  {
    name: "Pullup",
  },
  {
    name: "Bench press",
  },
  {
    name: "Dumbbell curl",
  },
  {
    name: "Overhead press",
  },
];

export default function LoginStatusWrapper() {
  const { status, data } = useSession();

  const addDefaultExcercises = async (e: React.MouseEvent) => {
    e.preventDefault();
    excercises.forEach((excercise) => {
      addExcercise(excercise);
    });
  };

  const addExcercise = async (data: any) => {
    console.log(JSON.stringify({ data }))
    const response = await fetch("/api/admin-page", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data })
      // Body has to be named data to be processed by prisma
    });

    const excerciseInfo = await response.json();
    console.log(excerciseInfo);
  };

  if (status === "loading") {
    return (
      <div className="flex w-full h-screen justify-center items-center text-center text-3xl text-white bg-slate-700">
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "authenticated" && data?.user?.email === "admin@test.com") {
    return (
      <div className="w-full h-screen flex flex-col items-center bg-slate-700 text-white">
        <button onClick={addDefaultExcercises} className=" bg-slate-900 p-4 m-10">
          Add default excercises
        </button>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex w-full h-screen justify-center text-center bg-slate-700 text-white">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <h1>Permission denied</h1>
          <Link href="/">Go back</Link>
        </div>
      </div>
    );
  }

  return <></>;
}
