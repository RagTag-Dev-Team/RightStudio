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

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './resetPassword.module.css'

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
                    <Icon icon={isPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
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
                    <Icon icon={isConfirmPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button fullWidth variant='contained' type='submit'>
            Set New Password
          </Button>
          <Typography className={classnames('flex justify-center items-center', styles.primaryColor)}>
            <Link href='/pages/auth/login-v1' onClick={e => e.preventDefault()} className='flex items-center'>
              <Icon icon='mdi:chevron-left' />
              <span>Back to Login</span>
            </Link>
          </Typography>
        </form>
      </CardContent>
    </Card>
  )
}

export default ResetPasswordV1
