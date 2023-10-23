'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'

// Style Imports
import styles from '@components/dialogs/styles.module.css'

type AddEditAddressData = {
  firstName?: string
  lastName?: string
  country?: string
  address1?: string
  address2?: string
  landmark?: string
  city?: string
  state?: string
  zipCode?: string
}

type AddEditAddressProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data?: AddEditAddressData
}

const countries = ['Select Country', 'France', 'Russia', 'China', 'UK', 'US']

const customInputData: CustomInputVerticalData[] = [
  {
    title: 'Home',
    content: 'Delivery Time (7am - 9pm)',
    asset: 'ri-home-4-line',
    value: 'home',
    isSelected: true
  },
  {
    title: 'Office',
    content: 'Delivery Time (10am - 6pm)',
    asset: 'ri-building-4-line',
    value: 'office'
  }
]

const AddEditAddress = ({ open, setOpen, data }: AddEditAddressProps) => {
  const initialSelected: string = customInputData?.find(item => item.isSelected)?.value || ''

  // States
  const [selected, setSelected] = useState<string>(initialSelected)
  const [addressData, setAddressData] = useState<AddEditAddressProps['data']>(Object.assign({}, data))

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Dialog
      open={open}
      maxWidth='md'
      scroll='body'
      onClose={() => {
        setOpen(false)
        setSelected(initialSelected)
      }}
    >
      <DialogTitle
        variant='h5'
        className={classnames('flex gap-2 flex-col text-center', styles.dialogTitle, {
          [styles.smDialogTitle]: isBelowSmScreen
        })}
      >
        {data ? 'Edit Address' : 'Add New Address'}
        <Typography component='span' variant='body2' className='flex flex-col text-center'>
          {data ? 'Edit Address for future billing' : 'Add address for billing address'}
        </Typography>
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent
          className={classnames(styles.dialogContent, {
            [styles.smDialogContent]: isBelowSmScreen
          })}
        >
          <IconButton onClick={() => setOpen(false)} className={styles.closeIcon}>
            <i className='ri-close-line' />
          </IconButton>
          <Grid container spacing={5}>
            {customInputData.map((item, index) => {
              let asset

              if (item.asset && typeof item.asset === 'string') {
                asset = <i className={item.asset} />
              }

              return (
                <Grid item xs={12} sm={6} key={index}>
                  <CustomInputVertical
                    key={index}
                    type='radio'
                    name='addressType'
                    selected={selected}
                    data={typeof item.asset === 'string' ? { ...item, asset } : item}
                    handleChange={handleChange}
                  />
                </Grid>
              )
            })}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='First Name'
                name='firstName'
                variant='outlined'
                placeholder='John'
                value={addressData?.firstName}
                onChange={e => setAddressData({ ...addressData, firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Last Name'
                name='lastName'
                variant='outlined'
                placeholder='Doe'
                value={addressData?.lastName}
                onChange={e => setAddressData({ ...addressData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select
                  label='Country'
                  name='country'
                  variant='outlined'
                  value={addressData?.country?.toLowerCase().replace(/\s+/g, '-') || ''}
                  onChange={e => setAddressData({ ...addressData, country: e.target.value })}
                >
                  {countries.map((item, index) => (
                    <MenuItem key={index} value={item.toLowerCase().replace(/\s+/g, '-')}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Address Line 1'
                name='address1'
                variant='outlined'
                placeholder='12, Business Park'
                value={addressData?.address1}
                onChange={e => setAddressData({ ...addressData, address1: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Address Line 2'
                name='address1'
                variant='outlined'
                placeholder='Mall Road'
                value={addressData?.address2}
                onChange={e => setAddressData({ ...addressData, address2: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Landmark'
                name='landmark'
                variant='outlined'
                placeholder='Nr. Hard Rock Cafe'
                value={addressData?.landmark}
                onChange={e => setAddressData({ ...addressData, landmark: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='City'
                name='city'
                variant='outlined'
                placeholder='Los Angeles'
                value={addressData?.city}
                onChange={e => setAddressData({ ...addressData, city: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='State'
                name='state'
                variant='outlined'
                placeholder='California'
                value={addressData?.state}
                onChange={e => setAddressData({ ...addressData, state: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Zip Code'
                type='number'
                name='zipCode'
                variant='outlined'
                placeholder='99950'
                value={addressData?.zipCode}
                onChange={e => setAddressData({ ...addressData, zipCode: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Switch defaultChecked />} label='Make this default shipping address' />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          className={classnames('gap-2 justify-center', styles.dialogActions, {
            [styles.smDialogAction]: isBelowSmScreen
          })}
        >
          <Button variant='contained' onClick={() => setOpen(false)} type='submit'>
            {data ? 'Update' : 'Submit'}
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              setOpen(false)
              setSelected(initialSelected)
            }}
            type='reset'
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddEditAddress
