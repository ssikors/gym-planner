"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

type Props = {};

export const LoginLogout: React.FC<Props> = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "unauthenticated" ? (
          <div className="flex flex-col items-center gap-8">
            <div className="hover:cursor-pointer flex justify-center w-36 py-2 bg-teal-900 ring-2 ring-teal-300 shadow-md hover:scale-105 hover:opacity-60">
              <Link href="/signin">Register</Link>
            </div>
            <div className="hover:cursor-pointer flex justify-center w-36 py-2 bg-teal-900 ring-2 ring-teal-300 shadow-md hover:scale-105 hover:opacity-60">
              <Link href="/log-in">Log in</Link>
            </div>
          </div>
        ) : (
          <button className="hover:cursor-pointer  px-8 py-2 bg-teal-900 ring-2 ring-teal-300 shadow-md hover:scale-105 hover:opacity-60" onClick={() => signOut()}>Log out</button>
        )}
      </div>
    </>
  );
};
