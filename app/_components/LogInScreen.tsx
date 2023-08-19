import { ReactNode } from "react";
import { GoogleAuthButton } from "./auth-components/GoogleAuthButton";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function  LogInScreen() {
  const session = await getServerSession(authConfig)
  if (session) return redirect("/home")

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-purple-900 to-slate-900 ">
      <div className="flex items-center justify-center">
        <div className="absolute top-1/3 w-fit flex flex-col gap-4 p-4 rounded-md items-center bg-[#202020] shadow-md ">
          <GoogleAuthButton />
        </div>
      </div>
    </div>
  );
};
