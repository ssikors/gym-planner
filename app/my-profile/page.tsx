'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LoginStatusWrapper } from "../components/LoginStatusWrapper"

export default function MyProfile() {
  const router = useRouter()
  const { status } = useSession()

  return <LoginStatusWrapper>testing</LoginStatusWrapper>
}