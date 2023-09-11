"use client";
import { useSession } from "next-auth/react";
import { SimpleModal } from "./components/util/SimpleModal";
import { LoginLogout } from "./components/LoginLogout";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="flex w-full h-screen items-center justify-center bg-gradient-to-b from-teal-300 to-black">
        <SimpleModal>
          <LoginLogout />
        </SimpleModal>
      </div>
      <Footer />
    </>
  );
}
