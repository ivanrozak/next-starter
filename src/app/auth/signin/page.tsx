'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError(result.error)
    }
    else {
      router.push('/')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 rounded bg-white p-6 shadow-md">
        <h2 className="text-center text-2xl font-bold">Sign In</h2>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600">
          Sign In with Credentials
        </button>
        <button
          type="button"
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="rounded bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Sign In with Google
        </button>
        <button
          type="button"
          onClick={() => signIn('github', { callbackUrl: '/' })}
          className="rounded bg-gray-800 p-2 text-white hover:bg-gray-900"
        >
          Sign In with GitHub
        </button>
      </form>
    </div>
  )
}
