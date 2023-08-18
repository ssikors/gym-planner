'use client'

import { signIn } from 'next-auth/react'

export const GoogleAuthButton = () => {
  const handleClick = () => {
    signIn("google")
  }

  return (
    <button onClick={handleClick} className='w-fit p-2 rounded-md border-2 border-white'>
      Sign in with Google
    </button>
  )

}