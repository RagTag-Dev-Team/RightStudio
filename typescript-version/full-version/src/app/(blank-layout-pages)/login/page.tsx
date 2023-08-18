// Next Imports
import type { Metadata } from 'next'

// Components Imports
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const Login = () => {
  return <LoginForm />
}

export default Login
