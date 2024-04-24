'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Type Imports
import type { Locale } from '@configs/i18n'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const LoginV2 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks
  const { lang: locale } = useParams()

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <div className='flex bs-full justify-center'>
      <div className='flex bs-full items-center justify-center flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center bs-full is-[480px]'>
        <div>
          <div className='absolute block-start-[33px] inline-start-[38px]'>Logo</div>
          <Typography>{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography>
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
                className='text-end'
                color='primary'
                component={Link}
                href={getLocalizedUrl('/pages/auth/forgot-password-v2', locale as Locale)}
              >
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Log In
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>New on our platform?</Typography>
              <Typography
                component={Link}
                href={getLocalizedUrl('/pages/auth/register-v2', locale as Locale)}
                color='primary'
              >
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
