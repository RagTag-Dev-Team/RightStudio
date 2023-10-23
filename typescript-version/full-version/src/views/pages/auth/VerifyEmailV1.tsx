'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './verifyEmail.module.css'
import commonStyles from '@/styles/common.module.css'

const VerifyEmailV1 = () => {
  return (
    <Card className={classnames('flex flex-col', styles.card)}>
      <CardContent>
        <div className='flex justify-center items-start'>Logo</div>
        <Typography>Verify your email ✉️</Typography>
        <Typography>
          Account activation link sent to your email address: john.doe@email.com Please follow the link inside to
          continue.
        </Typography>
        <Button fullWidth variant='contained' type='submit'>
          Skip For Now
        </Button>
        <div className='flex justify-center items-center flex-wrap gap-2'>
          <Typography>Didn&#39;t get the mail?</Typography>
          <Typography className={commonStyles.primaryColor} component={Link} href='/' onClick={e => e.preventDefault()}>
            Resend
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default VerifyEmailV1
