'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/components/ui/button'
import { Button } from '@/components/ui/button'

export function LoginButton({ className, ...props }: ButtonProps) {
  const session = useSession()

  return (
    <Button asChild className={cn('rounded-full', className)} {...props}>
      {session.status === 'authenticated' ? (
        <Link href="/app">Dashboard</Link>
      ) : (
        <Link href="/app/login">Sign In</Link>
      )}
    </Button>
  )
}
