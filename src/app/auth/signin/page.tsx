'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChromeIcon, FacebookIcon, TwitterIcon } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const handleSignin = (e) => {
  e.preventDefault()
  signIn()
}

export default function Login() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <Card className="w-full">
        <div className="mx-auto flex flex-col items-center justify-center space-y-6 px-4 py-12 sm:px-6 lg:px-8">
          <CardHeader>
            <div className="w-full space-y-2">
              <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary">
                Sign in to your account
              </h2>
              <p className="text-center text-muted-foreground">
                Or sign in with one of your social accounts
              </p>
            </div>
          </CardHeader>
          <CardContent className="w-2/5">
            <div className="w-full space-y-4">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="******"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </form>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Link href="/#" className="col-span-1" onClick={handleSignin}>
                  <ChromeIcon className="h-5 w-5" />
                </Link>
                <Link href="/#" className="col-span-1">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Button variant="outline" className="col-span-1">
                  <TwitterIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  } else {
    return redirect('/dashboard')
  }
}
