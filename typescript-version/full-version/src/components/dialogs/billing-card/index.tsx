'use client'

// React Imports
import { useEffect, useState } from 'react'

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
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Style Imports
import styles from '@components/dialogs/styles.module.css'

type BillingCardData = {
  cardNumber?: string
  name?: string
  expiryDate?: string
  cardCvv?: string
  imgSrc?: string
  imgAlt?: string
  cardStatus?: string
  badgeColor?: ThemeColor
}

type BillingCardProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data?: BillingCardData
}

const initialCardData: BillingCardProps['data'] = {
  cardNumber: '',
  name: '',
  expiryDate: '',
  cardCvv: '',
  imgSrc: '',
  imgAlt: '',
  cardStatus: '',
  badgeColor: 'primary'
}

const BillingCard = ({ open, setOpen, data }: BillingCardProps) => {
  // States
  const [cardData, setCardData] = useState(initialCardData)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClose = () => {
    setOpen(false)
    setCardData(initialCardData)
  }

  useEffect(() => {
    setCardData(data ?? initialCardData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        variant='h5'
        className={classnames('flex flex-col gap-2 text-center', styles.dialogTitle, {
          [styles.smDialogTitle]: isBelowSmScreen
        })}
      >
        {data ? 'Edit Card' : 'Add New Card'}
        <Typography component='span' variant='body2' className='flex flex-col text-center'>
          {data ? 'Edit your saved card details' : 'Add card for future billing'}
        </Typography>
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent
          className={classnames('overflow-visible', styles.dialogContent, {
            [styles.smDialogContent]: isBelowSmScreen
          })}
        >
          <IconButton onClick={handleClose} className={styles.closeIcon}>
            <i className='ri-close-line' />
          </IconButton>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='number'
                autoComplete='off'
                label='Card Number'
                placeholder='0000 0000 0000 0000'
                value={cardData.cardNumber}
                onChange={e => setCardData({ ...cardData, cardNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name='name'
                label='Name on Card'
                autoComplete='off'
                placeholder='John Doe'
                value={cardData.name}
                onChange={e => setCardData({ ...cardData, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                name='expiry'
                autoComplete='off'
                label='Expiry'
                placeholder='MM/YY'
                value={cardData.expiryDate}
                onChange={e => setCardData({ ...cardData, expiryDate: e.target.value })}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                name='cvv'
                label='CVV'
                autoComplete='off'
                placeholder='123'
                value={cardData.cardCvv}
                onChange={e => setCardData({ ...cardData, cardCvv: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Switch defaultChecked />} label='Save Card for future billing?' />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          className={classnames('gap-2 justify-center', styles.dialogActions, {
            [styles.smDialogAction]: isBelowSmScreen
          })}
        >
          <Button variant='contained' type='submit' onClick={handleClose}>
            {data ? 'Update' : 'Submit'}
          </Button>
          <Button variant='outlined' type='reset' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default BillingCard
