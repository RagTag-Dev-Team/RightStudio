'use client'

// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from '@components/dialogs/styles.module.css'

type RoleDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

type DataType =
  | string
  | {
      title: string
      read?: boolean
      write?: boolean
      select?: boolean
    }

const defaultData: DataType[] = [
  'User Management',
  'Content Management',
  'Disputes Management',
  'Database Management',
  'Financial Management',
  'Reporting',
  'API Control',
  'Repository Management',
  'Payroll'
]

const RoleDialog = ({ open, setOpen }: RoleDialogProps) => {
  // States
  const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([])
  const [isIndeterminateCheckbox, setIsIndeterminateCheckbox] = useState<boolean>(false)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClose = () => {
    setOpen(false)
  }

  const togglePermission = (id: string) => {
    const arr = selectedCheckbox

    if (selectedCheckbox.includes(id)) {
      arr.splice(arr.indexOf(id), 1)
      setSelectedCheckbox([...arr])
    } else {
      arr.push(id)
      setSelectedCheckbox([...arr])
    }
  }

  const handleSelectAllCheckbox = () => {
    if (isIndeterminateCheckbox) {
      setSelectedCheckbox([])
    } else {
      defaultData.forEach(row => {
        const id = (typeof row === 'string' ? row : row.title).toLowerCase().split(' ').join('-')

        togglePermission(`${id}-read`)
        togglePermission(`${id}-write`)
        togglePermission(`${id}-create`)
      })
    }
  }

  useEffect(() => {
    if (selectedCheckbox.length > 0 && selectedCheckbox.length < defaultData.length * 3) {
      setIsIndeterminateCheckbox(true)
    } else {
      setIsIndeterminateCheckbox(false)
    }
  }, [selectedCheckbox])

  return (
    <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={handleClose}>
      <DialogTitle
        className={classnames('flex flex-col gap-2 text-center', styles.dialogTitle, {
          [styles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Add Card
        <Typography component='span' className='flex flex-col text-center'>
          Add card for future billing
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
          <TextField label='Role Name' variant='outlined' fullWidth placeholder='Enter Role Name' />
          <Typography>Role Permissions</Typography>
          <div className='flex flex-col'>
            <div className='flex items-center justify-between'>
              <Typography>Administrator Access</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleSelectAllCheckbox}
                    indeterminate={isIndeterminateCheckbox}
                    checked={selectedCheckbox.length === defaultData.length * 3}
                  />
                }
                label='Select All'
              />
            </div>
            {defaultData.map((item, index) => {
              const id = (typeof item === 'string' ? item : item.title).toLowerCase().split(' ').join('-')

              return (
                <div className='flex items-center justify-between' key={index}>
                  <Typography>{typeof item === 'object' ? item.title : item}</Typography>
                  {typeof item === 'object' ? (
                    <FormGroup className='flex-row'>
                      <FormControlLabel control={<Checkbox checked={item.read} />} label='Read' />
                      <FormControlLabel control={<Checkbox checked={item.write} />} label='Write' />
                      <FormControlLabel control={<Checkbox checked={item.select} />} label='Select' />
                    </FormGroup>
                  ) : (
                    <FormGroup className='flex-row'>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id={`${id}-read`}
                            onChange={() => togglePermission(`${id}-read`)}
                            checked={selectedCheckbox.includes(`${id}-read`)}
                          />
                        }
                        label='Read'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id={`${id}-write`}
                            onChange={() => togglePermission(`${id}-write`)}
                            checked={selectedCheckbox.includes(`${id}-write`)}
                          />
                        }
                        label='Write'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id={`${id}-create`}
                            onChange={() => togglePermission(`${id}-create`)}
                            checked={selectedCheckbox.includes(`${id}-create`)}
                          />
                        }
                        label='Create'
                      />
                    </FormGroup>
                  )}
                </div>
              )
            })}
          </div>
        </DialogContent>
        <DialogActions
          className={classnames('gap-2 justify-center', styles.dialogActions, {
            [styles.smDialogAction]: isBelowSmScreen
          })}
        >
          <Button variant='contained' type='submit' onClick={handleClose}>
            Submit
          </Button>
          <Button variant='outlined' type='reset' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default RoleDialog
