'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Logo from '@/components/ui/Logo'
import { ModeToggle } from '@/components/ui/toggle-darkmode'
import { ChromeIcon, FacebookIcon, TwitterIcon } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const handleSignin = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  signIn('google', {
    callbackUrl: '/dashboard'
  })
}

export default function Login() {
  // const { data: session } = useSession()
  // if (!session) {
    return (
      <Card className="w-full border-none dark:bg-primary-main">
        <div className="mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-12 sm:px-6 lg:px-8">
          <CardHeader>
            <div className="w-full space-y-2">
              <Logo />
              <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary dark:text-primary-light">
                Entre ou crie sua conta
              </h2>
              <p className="text-center text-muted-foreground dark:text-foreground">
                Ou entre com sua conta social
              </p>
            </div>
          </CardHeader>
          <CardContent className="w-2/5">
            <div className="w-full space-y-4">
              <form className="space-y-4">
                <div className='flex flex-col gap-3 mb-4'>
                  <Label htmlFor="email" className='mb-3'>Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    className='placeholder:text-text-disabled'
                  />
                </div>
                <div className='flex flex-col gap-3 mb-4'>
                  <Label htmlFor="password" className='mb-3'>Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="******"
                    required
                    className='placeholder:text-text-disabled'
                  />
                </div>
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
              </form>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground dark:text-foreground">
                    Continue com
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" title='Google' className="col-span-1 hover:bg-gradient-to-r from-chrome-red via-chrome-green to-chrome-yellow group/item" onClick={handleSignin}>
                  <ChromeIcon className="h-5 w-5 group-hover/item:text-white transition-colors" />
                </Button>
                <Button variant="outline" title='Facebook' className="col-span-1 hover:bg-facebook-blue group/item">
                  <FacebookIcon className="h-5 w-5 group-hover/item:text-white transition-colors" />
                </Button>
                <Button variant="outline" title='Twitter' className="col-span-1 hover:bg-twitter-blue group/item">
                  <TwitterIcon className="h-5 w-5 group-hover/item:text-white transition-colors" />
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
        <CardFooter className='w-full flex justify-between absolute bottom-0 right-0 h-auto py-4 px-4 border-none'>
          <div>
            <ModeToggle 
              sizeProps={'lg'}
            />
          </div>
          <h3 className='text-sm text-text-secondary dark:text-foreground'>Desenvolvido e mantido por ❤️</h3>
        </CardFooter>
      </Card>
    )
  } 
// }
