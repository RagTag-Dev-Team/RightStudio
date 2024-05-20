// React Imports
import { useState, useRef } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

type Props = {
  open: boolean
  handleClose: () => void
}

type FormDataType = {
  title: string
  slug: string
  fileName: string
  category: string
  comment: string
  status: string
}

// Vars
const initialData = {
  title: '',
  slug: '',
  fileName: '',
  category: '',
  comment: '',
  status: ''
}

const AddCategoryDrawer = ({ open, handleClose }: Props) => {
  // States
  const [formData, setFormData] = useState<FormDataType>(initialData)

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClose()
    setFormData(initialData)
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
  }

  // Handle File Upload
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setFormData({ ...formData, fileName: files[0].name })
    }
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
        <Typography variant='h5'>Add Category</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <TextField
            label='Title'
            fullWidth
            placeholder='Fashion'
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            label='Slug'
            fullWidth
            placeholder='Trends fashion'
            value={formData.slug}
            onChange={e => setFormData({ ...formData, slug: e.target.value })}
          />
          <div className='flex items-center gap-4'>
            <TextField
              size='small'
              placeholder='No file chosen'
              variant='outlined'
              value={formData.fileName}
              className='flex-auto'
              InputProps={{
                readOnly: true
              }}
            />
            <Button component='label' variant='outlined' htmlFor='contained-button-file'>
              Choose
              <input hidden id='contained-button-file' type='file' onChange={handleFileUpload} ref={fileInputRef} />
            </Button>
          </div>
          <FormControl fullWidth>
            <InputLabel id='category'>Parent Category</InputLabel>
            <Select
              fullWidth
              id='category'
              value={formData.category}
              onChange={e => setFormData({ ...formData, category: e.target.value })}
              label='Parent Category'
              labelId='category'
            >
              <MenuItem value='HouseHold'>HouseHold</MenuItem>
              <MenuItem value='Management'>Management</MenuItem>
              <MenuItem value='Electronics'>Electronics</MenuItem>
              <MenuItem value='Office'>Office</MenuItem>
              <MenuItem value='Accessories'>Accessories</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label='Comment'
            value={formData.comment}
            onChange={e => setFormData({ ...formData, comment: e.target.value })}
            multiline
            rows={4}
            placeholder='Write a Comment...'
          />
          <FormControl fullWidth>
            <InputLabel id='plan-select'>Parent Status</InputLabel>
            <Select
              fullWidth
              id='select-status'
              value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value })}
              label='Parent Status'
              labelId='status-select'
            >
              <MenuItem value='Published'>Published</MenuItem>
              <MenuItem value='Inactive'>Inactive</MenuItem>
              <MenuItem value='Scheduled'>Scheduled</MenuItem>
            </Select>
          </FormControl>
          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Add
            </Button>
            <Button variant='outlined' color='error' type='reset' onClick={() => handleClose()}>
              Discard
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddCategoryDrawer
