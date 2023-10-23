'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './verifyEmail.module.css'
import commonStyles from '@/styles/common.module.css'

const VerifyEmailV2 = () => {
  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <div className='flex h-full justify-center'>
      {isAboveMdScreen && <div className='flex h-full items-center justify-center flex-1'>image</div>}
      <div className={classnames('flex justify-center items-center h-full', styles.rightWrapper)}>
        <div>
          <div className={classnames('absolute', styles.templateName)}>Logo</div>
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
            <Typography
              className={commonStyles.primaryColor}
              component={Link}
              href='/'
              onClick={e => e.preventDefault()}
            >
              Resend
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailV2
