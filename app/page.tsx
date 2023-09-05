'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { LoginLogout } from './components/LoginLogout'

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <main>
      <LoginLogout/>
    </main>
  )
}