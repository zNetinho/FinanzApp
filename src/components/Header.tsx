'use client'

'use client'

import React from 'react'
import Logo from './ui/Logo'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SearchIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'

const handleSignout = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  signOut({
    callbackUrl: '/auth/signin',
  })

}

function Header() {
  const { data: session } = useSession()
  console.log(session)
  
  if( session?.user) {
    const user = {
      avatar: session?.user?.avatar || "",
      nome: session?.user?.name,
    };
    const userCustom = {
        avatar: session?.user?.image || "",
        nome: session?.user?.name
    };
    return (
      <header className="w-screen h-auto px-8 py-4 border-b drop-shadow-sm bg-white dark:bg-slate-800 sticky top-0">
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
                  {session?.user && (
                    <AvatarImage
                      src={
                        user.avatar
                          ? user.avatar
                          : 'https://github.com/shadcn.png'
                      }
                      alt="@shadcn"
                    ></AvatarImage>
                  )}
                  <AvatarFallback>NF</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 relative right-5">
                <MenuUser />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
