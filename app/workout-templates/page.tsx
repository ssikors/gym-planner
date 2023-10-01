
import { LoginStatusWrapper } from "../components/LoginStatusWrapper";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WorkoutTemplate } from "../components/workout-templates/WorkoutTemplate";
import Link from "next/link";

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

  return (
    <LoginStatusWrapper>
      <div className="w-full mt-24 flex flex-col text-white bg-slate-700  min-h-screen h-full items-center justify-start">
        <Header currentPage="Templates" />
        <h1 className="text-2xl mt-12">Your Templates:</h1>
        <div className="flex flex-col items-center">
          <WorkoutTemplate
            title="My workout template"
            excerciseList={excercises}
          ></WorkoutTemplate>
          <WorkoutTemplate
            title="My workout template 2"
            excerciseList={excercises}
          ></WorkoutTemplate>
          <Link href={"/workout-templates/new"} className="text-center text-xl mt-8 mb-4 bg-teal-700 w-64 p-2 border-2 hover:opacity-80 hover:scale-105">Add a new template</Link>
          {/* <img src="https://cdn.pixabay.com/photo/2022/02/08/02/52/gym-7000637_1280.png" alt="bruh" /> */}
        </div>
        <Footer />
      </div>
    </LoginStatusWrapper>
  );
}
