'use client'

import { useSession } from "next-auth/react";
import { LoginLogout } from "./LoginLogout";

type Props = {
  children: React.ReactNode
};

export const LoginStatusWrapper: React.FC<Props> = ({ children }) => {
  const { status } = useSession()

  if (status === "loading") {
    return <div className="flex w-full h-screen justify-center items-center text-center"><p>Loading...</p></div>
  }

  if (status === "authenticated") {
    return <>{children}</>
  }

  if (status === "unauthenticated") {
    return <div className="flex w-full h-screen justify-center text-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1>You need to log in to view this page.</h1>
        <LoginLogout />
      </div>
    </div>
  }

  return <></>
};