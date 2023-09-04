'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)
  return (
    <main>
      <h1></h1>
      <Link href="/register">Register</Link>
      <Link href="/log-in">Log in</Link>
    </main>
  )
}