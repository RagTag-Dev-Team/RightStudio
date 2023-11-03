'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './v1.module.css'
import commonStyles from '@/styles/common.module.css'

const ResetPasswordV1 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleClickShowConfirmPassword = () => setIsConfirmPasswordShown(show => !show)

  return (
    <Card className={classnames('flex flex-col', styles.card)}>
      <CardContent>
        <div className='flex justify-center items-start'>Logo</div>
        <Typography>Reset Password 🔒</Typography>
        <Typography>Your new password must be different from previously used passwords</Typography>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          <TextField
            autoFocus
            fullWidth
            label='Password'
            type={isPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                    <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            label='Confirm Password'
            type={isConfirmPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='end' onClick={handleClickShowConfirmPassword} onMouseDown={e => e.preventDefault()}>
                    <i className={isConfirmPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button fullWidth variant='contained' type='submit'>
            Set New Password
          </Button>
          <Typography className={classnames('flex justify-center items-center', commonStyles.primaryColor)}>
            <Link href='/pages/auth/login-v1' onClick={e => e.preventDefault()} className='flex items-center'>
              <i className='ri-arrow-left-s-line' />
              <span>Back to Login</span>
            </Link>
          </Typography>
        </form>
      </CardContent>
    </Card>
  )
}

export default ResetPasswordV1
