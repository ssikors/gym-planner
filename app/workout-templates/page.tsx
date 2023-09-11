"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginStatusWrapper } from "../components/LoginStatusWrapper";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function MyProfile() {
  const router = useRouter();
  const { status, data } = useSession();

  return (
    <LoginStatusWrapper>
      <div className="w-full mt-24 flex flex-col text-white bg-slate-700  min-h-screen h-full items-center justify-start">
        <Header currentPage="My Profile" />
          <h1 className="text-2xl mt-12">Your Templates:</h1>
          <div className="flex flex-row">
          </div>
        <Footer />
      </div>
    </LoginStatusWrapper>
  );
}