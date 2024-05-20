// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

type Props = {
  open: boolean
  handleClose: () => void
}

type FormDataType = {
  fullName: string
  email: string
  contact: string
  address1: string
  address2: string
  town: string
  state: string
  postcode: string
  country: string
}

// Vars
const initialData = {
  fullName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
  town: '',
  state: '',
  postcode: '',
  country: ''
}

const AddCustomerDrawer = ({ open, handleClose }: Props) => {
  // States
  const [formData, setFormData] = useState<FormDataType>(initialData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClose()
    setFormData(initialData)
  }

  const handleReset = () => {
    handleClose()
    setFormData({
      fullName: '',
      email: '',
      contact: '',
      address1: '',
      address2: '',
      town: '',
      state: '',
      postcode: '',
      country: ''
    })
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h6'>Add a Customer</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>
        <div className='p-5'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <Typography color='text.primary' className='font-medium'>
              Basic Information
            </Typography>
            <TextField
              label='Full Name'
              fullWidth
              placeholder='John Doe'
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
            />
            <TextField
              label='Email Address'
              fullWidth
              placeholder='johndoe@gmail.com'
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <TextField
              label='Mobile Number'
              type='number'
              fullWidth
              placeholder='(397) 294-5153'
              value={formData.contact}
              onChange={e => setFormData({ ...formData, contact: e.target.value })}
            />
            <Typography color='text.primary' className='font-medium'>
              Shipping Information
            </Typography>
            <TextField
              fullWidth
              label='Address Line 1*'
              name='address1'
              variant='outlined'
              value={formData.address1}
              onChange={e => setFormData({ ...formData, address1: e.target.value })}
            />
            <TextField
              fullWidth
              label='Address Line 2*'
              name='address2'
              variant='outlined'
              value={formData.address2}
              onChange={e => setFormData({ ...formData, address2: e.target.value })}
            />
            <TextField
              fullWidth
              label='Town*'
              name='town'
              variant='outlined'
              value={formData.town}
              onChange={e => setFormData({ ...formData, town: e.target.value })}
            />
            <TextField
              fullWidth
              label='State/Province*'
              name='state'
              variant='outlined'
              value={formData.state}
              onChange={e => setFormData({ ...formData, state: e.target.value })}
            />
            <TextField
              fullWidth
              label='Post Code*'
              name='postcode'
              variant='outlined'
              value={formData.postcode}
              onChange={e => setFormData({ ...formData, postcode: e.target.value })}
            />
            <FormControl fullWidth>
              <InputLabel id='country'>Country*</InputLabel>
              <Select
                fullWidth
                id='country'
                value={formData.country}
                onChange={e => setFormData({ ...formData, country: e.target.value })}
                label='Select Country'
                labelId='country'
                inputProps={{ placeholder: 'Country' }}
              >
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
              </Select>
            </FormControl>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1'>
                <Typography color='text.primary' className='font-medium'>
                  Use as a billing address?
                </Typography>
                <Typography variant='body2'>Please check budget for more info.</Typography>
              </div>
              <Switch defaultChecked />
            </div>
            <div className='flex items-center gap-4'>
              <Button variant='contained' type='submit'>
                Add
              </Button>
              <Button variant='outlined' color='error' type='reset' onClick={() => handleReset()}>
                Discard
              </Button>
            </div>
          </form>
        </div>
      </PerfectScrollbar>
    </Drawer>
  )
}

export default AddCustomerDrawer
