// MUI Imports
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogContent from '@mui/material/DialogContent'
import InputAdornment from '@mui/material/InputAdornment'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from '../styles.module.css'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

const SMSVerification = ({ open, setOpen }: Props) => {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <div className='flex justify-center'>
          <Typography>Enable One Time Password</Typography>
        </div>
        <IconButton className={styles.closeIcon} onClick={handleClose}>
          <Icon icon='mdi:close' />
        </IconButton>
        <Typography>Verify Your Mobile Number for SMS</Typography>
        <Typography>
          Enter your mobile phone number with country code and we will send you a verification code.
        </Typography>
        <form
          onSubmit={e => {
            e.preventDefault()
            handleClose()
          }}
        >
          <TextField
            fullWidth
            type='number'
            label='Phone Number'
            placeholder='202 555 0111'
            id='outlined-start-adornment'
            InputProps={{
              startAdornment: <InputAdornment position='start'>+1</InputAdornment>
            }}
          />
          <div>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default SMSVerification
