import { LoginStatusWrapper } from "@/app/components/LoginStatusWrapper";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function NewTemplate() {

  return (
    <LoginStatusWrapper>
      <div className="w-full mt-24 flex flex-col text-white bg-slate-700  min-h-screen h-full items-center justify-start">
        <Header currentPage="Templates" />
        <h1 className="text-2xl mt-12">Add excercises to your template:</h1>
        <div className="flex flex-col items-center">
        </div>
        <Footer />
      </div>
    </LoginStatusWrapper>
  );
}
