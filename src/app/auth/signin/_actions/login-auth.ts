import { signIn } from 'next-auth/react'

export const handleLoginGoogle = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  signIn('google', {
    callbackUrl: '/dashboard',
  })
}

export const handleLoginGithub = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  signIn('github', {
    callbackUrl: '/dashboard',
  })
}
