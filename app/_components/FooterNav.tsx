'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export const FooterNav: React.FC = () => {

  return <>
    <div className="flex flex-row justify-evenly items-center w-full h-16 fixed bg-[#202020] bottom-0 text-white border-t-2 border-indigo-900">
      <Link className={`hover:text-indigo-400 ${usePathname() === "/home" ? "text-indigo-600" : ""}`} href="/home">Home</Link>
      <Link className={`hover:text-indigo-400 ${usePathname() === "/workout" ? "text-indigo-600" : ""}`} href="/workout">Workout</Link>
      <Link className={`hover:text-indigo-400 ${usePathname() === "/workout-templates" ? "text-indigo-600" : ""}`} href="/workout-templates">Templates</Link>
    </div>
  </>
};