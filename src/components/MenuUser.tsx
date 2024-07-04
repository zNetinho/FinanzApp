import { Separator } from '@radix-ui/react-separator'
import { PiggyBank, User, WalletMinimalIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React from 'react'
import { Card, CardFooter, CardHeader } from './ui/card'
import { ModeToggle } from './ui/toggle-darkmode'

type itemMenu = {
  icon: React.ReactNode
  anchor: string
}

function MenuUser() {
  const { data: session } = useSession()
  const itensMenu: itemMenu[] = [
    {
      icon: <User />,
      anchor: 'Perfil',
    },
    {
      icon: <PiggyBank />,
      anchor: 'Depositar',
    },
    {
      icon: <WalletMinimalIcon />,
      anchor: 'Saldo em conta',
    },
  ]

  return (
    <Card className="border-none p-0 m-0 flex flex-col">
      <div className="py-3 font-medium">
        Bem-vindo de volta, {session?.user?.name}
      </div>
      <CardHeader>
        <ul>
          {itensMenu.map((elemento, index) => (
            <li key={index} className="text-lg">
              <div className="flex gap-2">
                {elemento.icon} {elemento.anchor}
              </div>
              <Separator className="my-4 h-[.5px] bg-slate-400" />
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardFooter className="justify-end">
        <ModeToggle />
      </CardFooter>
    </Card>
  )
}

export default MenuUser
