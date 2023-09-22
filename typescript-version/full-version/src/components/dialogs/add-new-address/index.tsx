// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
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

// Type Imports
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Custom Imports
import CustomInputVertical from '@core/components/custom-inputs/Vertical'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

const country = ['Select Country', 'France', 'Russia', 'China', 'UK', 'US']

const customInputData: CustomInputVerticalData[] = [
  {
    title: 'Home',
    content: 'Delivery Time (7am - 9pm)',
    asset: 'mdi:home-outline',
    value: 'home',
    isSelected: true
  },
  {
    title: 'Office',
    content: 'Delivery Time (10am - 6pm)',
    asset: 'mdi:office-building',
    value: 'office'
  }
]

const AddNewAddress = ({ open, setOpen }: Props) => {
  const initialSelected: string = customInputData?.find(item => item.isSelected)?.value || ''

  // States
  const [selected, setSelected] = useState<string>(initialSelected)

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Dialog open={open} maxWidth='md' scroll='body' onClose={() => setOpen(false)}>
      <DialogContent>
        <IconButton onClick={() => setOpen(false)} className='!absolute top-4 right-4'>
          <Icon icon='mdi:close' />
        </IconButton>
        <div className='flex flex-col items-center'>
          <Typography>Add New Address</Typography>
          <Typography>Add new address for future billing</Typography>
        </div>
        <form>
          <Grid container>
            {customInputData.map((item, index) => {
              let asset

              if (item.asset && typeof item.asset === 'string') {
                asset = <Icon icon={item.asset} />
              }

              return (
                <Grid item xs={12} md={6} key={index}>
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
            <Grid item xs={12} md={6}>
              <TextField fullWidth label='First Name' name='firstName' variant='outlined' placeholder='John' />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label='Last Name' name='lastName' variant='outlined' placeholder='Doe' />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select label='Country' name='country' variant='outlined' defaultValue='us'>
                  {country.map((item, index) => (
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Address Line 2' name='address1' variant='outlined' placeholder='Mall Road' />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Landmark'
                name='landmark'
                variant='outlined'
                placeholder='Nr. Hard Rock Cafe'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label='City' name='city' variant='outlined' placeholder='Los Angeles' />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label='State' name='state' variant='outlined' placeholder='California' />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Zip Code'
                type='number'
                name='zipCode'
                variant='outlined'
                placeholder='99950'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Switch defaultChecked />} label='Use as a billing address' />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions className='gap-2 justify-center'>
        <Button variant='contained' onClick={() => setOpen(false)}>
          Submit
        </Button>
        <Button variant='outlined' color='secondary' onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddNewAddress
