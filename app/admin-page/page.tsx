"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

type Excercise = {
  name: string;
};

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
  const [excerciseName, setExcerciseName] = useState<string>("");

  const addDefaultExcercises = async (e: React.MouseEvent) => {
    e.preventDefault();
    excercises.forEach((excercise) => {
      addExcercise(excercise);
    });
  };

  const addExcercise = async (data: any) => {
    console.log(JSON.stringify({ data }));
    const response = await fetch("/api/admin-page", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
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
        <button
          onClick={addDefaultExcercises}
          className=" bg-teal-900 border-[1px] p-4 m-10"
        >
          Add default excercises
        </button>
        <form action="#" method="POST">
          <div className="flex flex-col px-8 pt-4 pb-8 bg-slate-800">
            <h1 className="text-center text-xl underline underline-offset-4 mb-6">
              Add new excercise
            </h1>
            <label htmlFor="name" className="block text-md  text-center">
              Excercise name:
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="string"
                value={excerciseName}
                onChange={(e) => {
                  setExcerciseName(e.target.value);
                }}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                addExcercise({name: excerciseName});
              }}
              className="flex justify-center rounded-md mt-8 bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-60"
            >
              Add excercise
            </button>
          </div>
        </form>
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
