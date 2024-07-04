'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

const handleSignin = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  signIn()
}
const handleSignout = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  signOut()
}

export default function Login() {
  const { data: session } = useSession()
  return (
    <div>
      {session ? (
        <a href="#" onClick={handleSignout} className="btn-signin">
          <button>Sign out</button>
        </a>
      ) : (
        <a href="#" onClick={handleSignin} className="btn-signin">
          <button> Sign in</button>
        </a>
      )}
    </div>
  )
}
