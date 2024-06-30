import React from 'react'
import Logo from './ui/Logo'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SearchIcon } from 'lucide-react'

function Header() {
  return (
    <header className="w-screen h-auto px-8 py-4 border-b drop-shadow-sm bg-white sticky top-0">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex gap-4 items-center">
          <SearchIcon />
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            ></AvatarImage>
            <AvatarFallback>NF</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default Header
