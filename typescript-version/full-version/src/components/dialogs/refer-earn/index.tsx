'use client'

// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'

// Config Imports
import themeConfig from '@configs/themeConfig'

type ReferEarnProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

type Options = {
  icon?: ReactNode
  title?: string
  subtitle?: string
}

const options: Options[] = [
  {
    icon: 'ri-send-plane-2-line',
    title: 'Send Invitation 👍🏻',
    subtitle: 'Send your referral link to your friend'
  },
  {
    icon: 'ri-clipboard-line',
    title: 'Registration 😎',
    subtitle: 'Let them register to our services'
  },
  {
    icon: 'ri-gift-line',
    title: 'Free Trial  🎉',
    subtitle: 'Your friend will get 30 days free trial'
  }
]

const ReferEarn = ({ open, setOpen }: ReferEarnProps) => {
  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)} maxWidth='md' scroll='body'>
      <DialogTitle variant='h4' className='flex gap-2 flex-col text-center sm:pbs-16 sm:pbe-12 sm:pli-16'>
        Refer & Earn
        <Typography component='span' className='flex flex-col text-center'>
          {`Invite your friend to ${themeConfig.templateName}, if they sign up, you and your friend will get 30 days free
          trial`}
        </Typography>
      </DialogTitle>
      <DialogContent className='flex flex-col gap-6 pbs-0 sm:pli-16 sm:pbe-16'>
        <IconButton onClick={() => setOpen(false)} className='absolute block-start-4 inline-end-4'>
          <i className='ri-close-line' />
        </IconButton>
        <Grid container spacing={6}>
          {options?.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div className='flex items-center flex-col gap-4'>
                <Avatar className='bs-[66px] is-[66px] sm:bs-[88px] sm:is-[88px]'>
                  {typeof option.icon === 'string' ? (
                    <i className={classnames('text-[32px] sm:text-[40px]', option.icon)} />
                  ) : (
                    option.icon
                  )}
                </Avatar>
                <div className='flex flex-col gap-2 text-center'>
                  <Typography>{option.title}</Typography>
                  <Typography variant='body2'>{option.subtitle}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Divider className='mlb-6' />
        <div className='flex flex-col gap-5'>
          <Typography variant='h5'>Invite your friends</Typography>
          <div className='flex flex-col gap-2 flex-wrap'>
            <InputLabel htmlFor='refer-email' className='inline-flex whitespace-break-spaces'>
              {`Enter your friend&#39;s email address and invite them to join ${themeConfig.templateName} 😍`}
            </InputLabel>
            <div className='flex items-center is-full flex-wrap sm:flex-nowrap'>
              <TextField fullWidth size='small' id='refer-email' placeholder='johnDoe@email.com' />
              <Button variant='contained' className='max-sm:is-full'>
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <Typography variant='h5'>Share the referral link</Typography>
          <div className='flex flex-col gap-2'>
            <InputLabel htmlFor='refer-social' className='inline-flex whitespace-break-spaces'>
              You can also copy and send it or share it on your social media. 🚀
            </InputLabel>
            <div className='flex items-center justify-end sm:justify-initial flex-wrap sm:flex-nowrap'>
              <OutlinedInput
                fullWidth
                size='small'
                id='refer-social'
                placeholder='http://referral.link'
                endAdornment={
                  <InputAdornment position='end'>
                    <Button size='small' className='uppercase'>
                      Copy Link
                    </Button>
                  </InputAdornment>
                }
              />
              <div className='flex items-center'>
                <CustomIconButton className='rounded text-white bg-facebook'>
                  <i className='ri-facebook-circle-line' />
                </CustomIconButton>
                <CustomIconButton className='rounded text-white bg-twitter'>
                  <i className='ri-twitter-line' />
                </CustomIconButton>
                <CustomIconButton className='rounded text-white bg-linkedin'>
                  <i className='ri-linkedin-line' />
                </CustomIconButton>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReferEarn
