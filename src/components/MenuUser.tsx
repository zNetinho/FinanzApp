import { Separator } from '@radix-ui/react-separator'
import { PiggyBank, User, WalletMinimalIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Card, CardFooter, CardHeader } from './ui/card'
import { ModeToggle } from './ui/toggle-darkmode'
import LinkComponent from './ui/LinkComponent'
import { Button } from './ui/button'

type itemMenu = {
  icon: React.ReactNode
  anchor: string
  href: string
}

const handleSignOut = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  signOut({
    callbackUrl: '/auth/signin'
  })
}

function MenuUser() {
  const { data: session } = useSession()
  const itensMenu: itemMenu[] = [
    {
      icon: <User />,
      anchor: 'Perfil',
      href: '/dashboard/perfil',
    },
    {
      icon: <PiggyBank />,
      anchor: 'Depositar',
      href: '/dashboard/depoisto',
    },
    {
      icon: <WalletMinimalIcon />,
      anchor: 'Saldo em conta',
      href: '/dashboard/overview',
    },
  ]

  return (
    <Card className="border-none p-0 m-0 flex flex-col dark:bg-primary-main">
      <div className="py-5 font-medium">
        Bem-vindo de volta, {session?.user?.name}
      </div>
      <CardHeader>
        <ul>
          {itensMenu.map((elemento, index) => (
            <li key={index} className="text-lg">
              <LinkComponent 
                href={elemento.href}
              >
                <div className="flex gap-2">
                  {elemento.icon} {elemento.anchor}
                </div>
              </LinkComponent>
              <Separator className="my-4 h-[.5px] bg-slate-400" />
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardFooter className="w-full justify-between">
        <ModeToggle />
        <Button onClick={handleSignOut} variant="destructive">
          Sair
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MenuUser
