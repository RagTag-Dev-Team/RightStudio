'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './twoSteps.module.css'
import commonStyles from '@/styles/common.module.css'

const TwoStepsV2 = () => {
  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <div className='flex h-full justify-center'>
      {isAboveMdScreen && <div className='flex h-full items-center justify-center flex-1'>image</div>}
      <div className={classnames('flex justify-center items-center h-full', styles.rightWrapper)}>
        <div>
          <div className={classnames('absolute', styles.templateName)}>Logo</div>
          <Typography>Two Step Verification 💬</Typography>
          <Typography>
            We sent a verification code to your mobile. Enter the code from the mobile in the field below.
          </Typography>
          <Typography className='font-medium'>******1234</Typography>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <Button fullWidth variant='contained' type='submit'>
              Skip For Now
            </Button>
            <div className='flex items-center justify-between'>
              <TextField autoFocus />
              <TextField />
              <TextField />
              <TextField />
              <TextField />
              <TextField />
            </div>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Didn&#39;t get the code?</Typography>
              <Typography
                className={commonStyles.primaryColor}
                component={Link}
                href='/'
                onClick={e => e.preventDefault()}
              >
                Resend
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TwoStepsV2
