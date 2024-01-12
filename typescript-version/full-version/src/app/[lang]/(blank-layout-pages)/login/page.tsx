// Next Imports
import type { Metadata } from 'next'

// Component Imports
import LoginForm from '@views/login/LoginForm'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const Login = () => {
  return <LoginForm />
}

export default Login
