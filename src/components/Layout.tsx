import React from 'react'
import Header from './Header'
import { FooterNavigation } from './FooterNavigation'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto w-full">{children}</main>
      <FooterNavigation />
    </div>
  )
}
