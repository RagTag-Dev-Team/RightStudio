'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './twoSteps.module.css'

const TwoStepsV1 = () => {
  return (
    <Card className={classnames('flex flex-col', styles.card)}>
      <CardContent>
        <div className='flex justify-center items-start'>Logo</div>
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
            <Typography className={styles.primaryColor} component={Link} href='/' onClick={e => e.preventDefault()}>
              Resend
            </Typography>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default TwoStepsV1
