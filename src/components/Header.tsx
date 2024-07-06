'use client'
import React from 'react'
import Logo from './ui/Logo'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SearchIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { redirect } from 'next/navigation'
import Photo from './ui/Photo'
import MenuUser from './MenuUser'

function Header() {
  const { data: session } = useSession()
  if ( session === null ) {
    return redirect('/auth/signin')
  }
  const avatarImg = session?.user?.image
  return (
    <header className="w-screen h-auto px-8 py-4 border-b drop-shadow-sm bg-white dark:bg-primary-main sticky top-0">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex gap-4 items-center">
          <div className="px-4">
            {session?.user && (
              <h2 className="text-sm font-medium">
                {' '}
                Hi!, {session?.user.name}
              </h2>
            )}
          </div>
          <SearchIcon />
          <Popover>
            <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={
                        avatarImg
                      }
                      alt="@shadcn"
                    ></AvatarImage>
                    <AvatarFallback>NF</AvatarFallback>
                  </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-96 relative right-5 dark:bg-primary-main">
              <MenuUser />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  )
}

export default Header
