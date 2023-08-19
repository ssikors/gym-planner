'use client'

import { signIn } from 'next-auth/react'

import Image from "next/image";

import googleLogo from "@/public/google-logo-2.jpg"
import { redirect } from 'next/navigation';

export const GoogleAuthButton = () => {
  const handleClick = () => {
    signIn("google")
  }

  return (
    <button onClick={handleClick} className='flex flex-row items-center w-fit p-2 rounded-md border-2 border-indigo-800 gap-2 bg-white'>
      <p className='text-xl text-gray-800'>Sign in with Google</p>
      <Image src={googleLogo} alt="Google logo" width={32} height={32} />
    </button>
  )

}