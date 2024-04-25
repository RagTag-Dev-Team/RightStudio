'use client'

// React Imports
import { useState } from 'react'
import type { FormEvent } from 'react'

// Next Imports
import { useParams, useRouter, useSearchParams } from 'next/navigation'

// Third-party Imports
import { signIn } from 'next-auth/react'

// Type Imports
import type { Locale } from '@/configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const LoginForm = () => {
  // States
  const [email, setEmail] = useState('admin@master.com')
  const [password, setPassword] = useState('admin')

  // Hooks
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const res = await signIn('credentials', { email, password, redirect: false })

    if (res && res.ok && res.error === null) {
      const redirectURL = searchParams.get('redirectTo') ?? '/'

      router.replace(getLocalizedUrl(redirectURL, locale as Locale))
    } else {
      if (res?.error) {
        const error = JSON.parse(res.error)

        console.log(error)
      }

      // setError('email', {
      //   type: 'manual',
      //   message: 'Email or Password is invalid'
      // })
    }
  }

  return (
    <div className='min-bs-full flex justify-center items-center'>
      <form method='post' onSubmit={handleSubmit}>
        <label>
          Email:
          <input autoFocus type='text' value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
      <button className='block' onClick={() => signIn('google')}>
        Login with google
      </button>
    </div>
  )
}

export default LoginForm
