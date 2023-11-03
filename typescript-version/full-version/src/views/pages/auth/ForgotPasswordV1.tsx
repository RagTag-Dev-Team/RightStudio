// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Form from '@components/Form'

// Style Imports
import styles from './v1.module.css'
import commonStyles from '@/styles/common.module.css'

const ForgotPasswordV1 = () => {
  return (
    <Card className={classnames('flex flex-col', styles.card)}>
      <CardContent>
        <div className='flex justify-center items-start'>Logo</div>
        <Typography>Forgot Password 🔒</Typography>
        <Typography>Enter your email and we&#39;ll send you instructions to reset your password</Typography>
        <Form noValidate autoComplete='off'>
          <TextField autoFocus fullWidth label='Email' />
          <Button fullWidth variant='contained' type='submit'>
            Send reset link
          </Button>
          <Typography className={classnames('flex justify-center items-center', commonStyles.primaryColor)}>
            <Link href='/pages/auth/login-v1' className='flex items-center'>
              <i className='ri-arrow-left-s-line' />
              <span>Back to Login</span>
            </Link>
          </Typography>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ForgotPasswordV1
