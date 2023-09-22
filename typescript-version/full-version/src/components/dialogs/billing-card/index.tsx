// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'
import IconButton from '@mui/material/IconButton'

// Type Imports
import type { ThemeColor } from '@core/types'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from '../styles.module.css'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  data?: {
    cardCvc?: string
    name?: string
    expiryDate?: string
    imgAlt?: string
    badgeColor?: ThemeColor
    cardStatus?: string
    cardNumber?: string
    imgSrc?: string
  }
}

const BillingCard = ({ open, setOpen, data }: Props) => {
  // States
  const [cardData, setCardData] = useState<Props['data']>({
    cardNumber: '',
    name: '',
    expiryDate: '',
    cardCvc: ''
  })

  const handleClose = () => {
    setOpen(false)
    setCardData({
      cardNumber: '',
      name: '',
      expiryDate: '',
      cardCvc: ''
    })
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className='text-center'>{data ? 'Edit Card' : 'Add Card'}</DialogTitle>
      <DialogContent>
        <IconButton onClick={handleClose} className={styles.closeIcon}>
          <Icon icon='mdi:close' />
        </IconButton>
        <DialogContentText className='text-center'>
          {data ? 'Edit your saved card details' : 'Add card for future billing'}
        </DialogContentText>
        <form>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='number'
                autoComplete='off'
                label='Card Number'
                placeholder='0000 0000 0000 0000'
                value={data ? data.cardNumber : cardData?.cardNumber}
                onChange={e => setCardData({ ...cardData, cardNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name='name'
                label='Name'
                autoComplete='off'
                placeholder='John Doe'
                value={data ? data.name : cardData?.name}
                onChange={e => setCardData({ ...cardData, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name='expiry'
                autoComplete='off'
                label='Expiry Date'
                placeholder='MM/YY'
                value={data ? data.expiryDate : cardData?.expiryDate}
                onChange={e => setCardData({ ...cardData, expiryDate: e.target.value })}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name='cvc'
                label='CVC Code'
                autoComplete='off'
                placeholder='123'
                value={data ? data.cardCvc : cardData?.cardCvc}
                onChange={e => setCardData({ ...cardData, cardCvc: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Switch defaultChecked />} label='Save Card for future billing?' />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions className='gap-2 justify-center'>
        <Button variant='contained' type='submit' onClick={handleClose}>
          {data ? 'Update' : 'Submit'}
        </Button>
        <Button variant='outlined' type='reset' color='secondary' onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default BillingCard
