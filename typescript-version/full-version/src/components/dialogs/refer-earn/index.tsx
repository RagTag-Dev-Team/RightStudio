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
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Config Imports
import themeConfig from '@/configs/themeConfig'

// Style Imports
import styles from './styles.module.css'
import globalDialogStyles from '@components/dialogs/styles.module.css'

type Props = {
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
    icon: 'mdi:send-variant-outline',
    title: 'Send Invitation 👍🏻',
    subtitle: 'Send your referral link to your friend'
  },
  {
    icon: 'mdi:clipboard-text',
    title: 'Registration 😎',
    subtitle: 'Let them register to our services'
  },
  {
    icon: 'mdi:gift-outline',
    title: 'Free Trial  🎉',
    subtitle: 'Your friend will get 30 days free trial'
  }
]

const ReferEarn = ({ open, setOpen }: Props) => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)} maxWidth='md' scroll='body'>
      <DialogTitle
        className={classnames('flex gap-2 flex-col text-center', globalDialogStyles.dialogTitle, {
          [globalDialogStyles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Refer & Earn
        <Typography component='span' className='flex flex-col text-center'>
          Invite your friend to {themeConfig.templateName}, if they sign up, you and your friend will get 30 days free
          trial
        </Typography>
      </DialogTitle>
      <DialogContent
        className={classnames('flex flex-col gap-6', globalDialogStyles.dialogContentWithActions, {
          [globalDialogStyles.smDialogContentWithActions]: isBelowSmScreen
        })}
      >
        <IconButton onClick={() => setOpen(false)} className={styles.closeIcon}>
          <Icon icon='mdi:close' />
        </IconButton>
        <Grid container spacing={6}>
          {options?.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div className='flex items-center flex-col gap-4'>
                <Avatar className={classnames(styles.avatarIcon, { [styles.smAvatarIcon]: isBelowSmScreen })}>
                  {typeof option.icon === 'string' ? (
                    <Icon icon={option.icon} fontSize={isBelowSmScreen ? '2rem' : '2.5rem'} />
                  ) : (
                    option.icon
                  )}
                </Avatar>
                <div className='flex flex-col gap-2 text-center'>
                  <Typography>{option.title}</Typography>
                  <Typography>{option.subtitle}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Divider className='mlb-6' />
        <div className='flex flex-col gap-5'>
          <Typography>Invite your friends</Typography>
          <div className='flex flex-col gap-2 flex-wrap'>
            <InputLabel htmlFor='refer-email' className='inline-flex whitespace-break-spaces'>
              Enter your friend&#39;s email address and invite them to join {themeConfig.templateName} 😍
            </InputLabel>
            <div className={classnames('flex items-center w-full', { 'flex-wrap': isBelowSmScreen })}>
              <TextField fullWidth size='small' id='refer-email' placeholder='johnDoe@email.com' />
              <Button variant='contained' className={classnames({ 'w-full': isBelowSmScreen })}>
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <Typography>Share the referral link</Typography>
          <div className='flex flex-col gap-2'>
            <InputLabel htmlFor='refer-social' className='inline-flex whitespace-break-spaces'>
              You can also copy and send it or share it on your social media. 🚀
            </InputLabel>
            <div
              className={classnames('flex items-center justify-initial', {
                'flex-wrap justify-end': isBelowSmScreen
              })}
            >
              <OutlinedInput
                fullWidth
                size='small'
                id='refer-social'
                placeholder='http://referral.link'
                endAdornment={
                  <InputAdornment position='end'>
                    <Button size='small'>Copy Link</Button>
                  </InputAdornment>
                }
              />
              <div className='flex items-center'>
                <Button className={styles.facebookIcon}>
                  <Icon icon='mdi:facebook' />
                </Button>
                <Button className={styles.twitterIcon}>
                  <Icon icon='mdi:twitter' />
                </Button>
                <Button className={styles.linkedinIcon}>
                  <Icon icon='mdi:linkedin' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReferEarn
