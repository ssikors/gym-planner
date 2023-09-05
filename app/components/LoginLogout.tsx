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
          <div className="flex flex-row gap-8">
            <div>
              <Link href="/signin">Register</Link>
            </div>
            <div>
              <Link href="/log-in">Log in</Link>
            </div>
          </div>
        ) : (
          <button onClick={() => signOut()}>Log out</button>
        )}
      </div>
    </>
  );
};
