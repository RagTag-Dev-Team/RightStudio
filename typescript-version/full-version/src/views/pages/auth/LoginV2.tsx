'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './login.module.css'
import commonStyles from '@/styles/common.module.css'

const LoginV2 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <div className='flex h-full justify-center'>
      {isAboveMdScreen && <div className={'flex h-full items-center justify-center flex-1'}>image</div>}
      <div className={classnames('flex justify-center items-center h-full', styles.rightWrapper)}>
        <div>
          <div className={classnames('absolute', styles.templateName)}>Logo</div>
          <Typography>Welcome to Master! 👋🏻</Typography>
          <Typography>Please sign-in to your account and start the adventure</Typography>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField autoFocus fullWidth label='Email' />
            <TextField
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
            <div className='flex justify-between items-center flex-wrap gap-x-3 gap-y-1'>
              <FormControlLabel control={<Checkbox />} label='Remember me' />
              <Typography
                className={classnames('text-end', commonStyles.primaryColor)}
                component={Link}
                href='/pages/auth/forgot-password-v2'
              >
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Log In
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>New on our platform?</Typography>
              <Typography component={Link} href='/pages/auth/register-v2' className={commonStyles.primaryColor}>
                Create an account
              </Typography>
            </div>
            <Divider className='gap-2'>Or</Divider>
            <div className='flex justify-center items-center'>
              <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
                <i className='ri-facebook-circle-fill' />
              </IconButton>
              <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
                <i className='ri-twitter-fill' />
              </IconButton>
              <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
                <i className='ri-github-fill' />
              </IconButton>
              <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
                <i className='ri-google-line' />
              </IconButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginV2
