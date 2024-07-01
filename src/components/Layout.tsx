import React from 'react'
import Header from './Header'
import { FooterNavigation } from './FooterNavigation'
import { Toaster } from './ui/toaster'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto w-full">
        {children}
        <Toaster />
      </main>
      <FooterNavigation />
    </div>
  )
}
