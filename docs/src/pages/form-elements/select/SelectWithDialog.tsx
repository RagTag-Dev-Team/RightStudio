// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import MenuItem from '@mui/material/MenuItem'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// Component Imports
import CustomTextField from '@core/components/mui/text-field'

const SelectWithDialog = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open select dialog
      </Button>
      <Dialog maxWidth='xs' fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent className='!pbs-2'>
          <Box component='form' className='flex gap-4'>
            <CustomTextField select fullWidth label='Age' id='demo-dialog-select' defaultValue=''>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </CustomTextField>
            <CustomTextField
              select
              fullWidth
              label='Age'
              defaultValue=''
              SelectProps={{ native: true }}
            >
              <option aria-label='None' value='' />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </CustomTextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>
            Cancel
          </Button>
          <Button onClick={handleClose} variant='outlined'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SelectWithDialog
