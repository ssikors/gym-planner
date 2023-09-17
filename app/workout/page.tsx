
import { LoginStatusWrapper } from "../components/LoginStatusWrapper";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ExcerciseList } from "../components/excercises/ExcerciseList";

export default function Page() {
  return (
    <LoginStatusWrapper>
      <div className="w-full flex flex-col text-white bg-slate-700 min-h-screen h-full items-center justify-center">
        <Header currentPage="Workout" />
        <h1 className="text-2xl">Workout</h1>
        <div className="flex flex-row"></div>
        <ExcerciseList />
        <Footer />
      </div>
    </LoginStatusWrapper>
  );
}
