"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginStatusWrapper } from "../components/LoginStatusWrapper";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WorkoutTemplate } from "../components/workout-templates/WorkoutTemplate";

import { ExcerciseSets } from "../components/workout-templates/WorkoutTemplate";

const excercises = [
  {
    excerciseName: "Pushups",
    numberOfSets: 4,
    id: 'id1',
  },
  {
    excerciseName: "Pullups",
    numberOfSets: 4,
    id: 'id2',
  },
  {
    excerciseName: "Bicep Curls",
    numberOfSets: 4,
    id: 'id3',
  },
];

export default function MyProfile() {
  const router = useRouter();
  const { status, data } = useSession();

  return (
    <LoginStatusWrapper>
      <div className="w-full mt-24 flex flex-col text-white bg-slate-700  min-h-screen h-full items-center justify-start">
        <Header currentPage="Templates" />
        <h1 className="text-2xl mt-12">Your Templates:</h1>
        <div className="flex flex-col">
          <WorkoutTemplate
            title="My workout template"
            excerciseList={excercises}
          ></WorkoutTemplate>
          <WorkoutTemplate
            title="My workout template 2"
            excerciseList={excercises}
          ></WorkoutTemplate>
          {/* <img src="https://cdn.pixabay.com/photo/2022/02/08/02/52/gym-7000637_1280.png" alt="bruh" /> */}
        </div>
        <Footer />
      </div>
    </LoginStatusWrapper>
  );
}
