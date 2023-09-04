'use client'
import { Session } from "next-auth"
// Done here instead of layout to avoid using use client there

import { SessionProvider } from "next-auth/react"
import React from "react"

type Props = {
  children: React.ReactNode
  session: Session
}

export const Provider : React.FC<Props> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}