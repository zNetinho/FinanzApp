'use client'
import React from 'react'
import Header from './Header'
import { FooterNavigation } from './FooterNavigation'
import { Toaster } from './ui/toaster'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { data: session } = useSession();

  if( session === null ) {
    redirect('/auth/signin')
  }

  return (
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto w-full dark:bg-primary-main">
          {children}
          <Toaster />
        </div>
        <FooterNavigation />
      </div>
  )
}
