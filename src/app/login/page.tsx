'use client'

import { useSession, signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

const handleSignin = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  signIn('google')
}
// const handleSignout = (e) => {
//   e.preventDefault()
//   signOut()
// }

export default function Login() {
  const { data: session } = useSession()
  return (
    <div>
      {session ? (
        redirect('/dashboard')
      ) : (
        <a href="#" onClick={handleSignin} className="btn-signin">
          <button> Sign in</button>
        </a>
      )}
    </div>
  )
}
