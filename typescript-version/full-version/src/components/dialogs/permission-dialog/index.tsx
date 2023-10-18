// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from '@components/dialogs/styles.module.css'

type PermissionDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data?: string
}

type EditProps = {
  handleClose: () => void
  isBelowSmScreen: boolean
  data: string
}

const AddContent = ({ handleClose, isBelowSmScreen }: { handleClose: () => void; isBelowSmScreen: boolean }) => {
  return (
    <>
      <DialogContent
        className={classnames('overflow-visible', styles.dialogContent, {
          [styles.smDialogContent]: isBelowSmScreen
        })}
      >
        <IconButton onClick={handleClose} className={styles.closeIcon}>
          <i className='ri-close-line' />
        </IconButton>
        <TextField fullWidth label='Permission Name' variant='outlined' placeholder='Enter Permission Name' />
        <FormControlLabel control={<Checkbox />} label='Set as core permission' />
      </DialogContent>
      <DialogActions
        className={classnames('gap-2 justify-center', styles.dialogActions, {
          [styles.smDialogAction]: isBelowSmScreen
        })}
      >
        <Button type='submit' variant='contained' onClick={handleClose}>
          Create Permission
        </Button>
        <Button onClick={handleClose} variant='outlined'>
          Discard
        </Button>
      </DialogActions>
    </>
  )
}

const EditContent = ({ handleClose, isBelowSmScreen, data }: EditProps) => {
  return (
    <DialogContent
      className={classnames('overflow-visible', styles.dialogContentAlone, {
        [styles.smDialogContentAlone]: isBelowSmScreen
      })}
    >
      <IconButton onClick={handleClose} className={styles.closeIcon}>
        <i className='ri-close-line' />
      </IconButton>
      <Alert severity='warning' className='mbe-8'>
        <AlertTitle>Warning!</AlertTitle>
        By editing the permission name, you might break the system permissions functionality. Please ensure you&#39;re
        absolutely certain before proceeding.
      </Alert>
      <div className='flex items-center gap-4'>
        <TextField
          fullWidth
          size='small'
          defaultValue={data}
          variant='outlined'
          label='Permission Name'
          placeholder='Enter Permission Name'
        />
        <Button variant='contained' onClick={handleClose}>
          Update
        </Button>
      </div>
      <FormControlLabel control={<Checkbox />} label='Set as core permission' />
    </DialogContent>
  )
}

const PermissionDialog = ({ open, setOpen, data }: PermissionDialogProps) => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        className={classnames('flex flex-col gap-2 text-center', styles.dialogTitle, {
          [styles.smDialogTitle]: isBelowSmScreen
        })}
      >
        {data ? 'Edit Permission' : 'Add New Permission'}
        <Typography component='span' className='flex flex-col text-center'>
          {data ? 'Edit permission as per your requirements.' : 'Permissions you may use and assign to your users.'}
        </Typography>
      </DialogTitle>
      {data ? (
        <EditContent handleClose={handleClose} isBelowSmScreen={isBelowSmScreen} data={data} />
      ) : (
        <AddContent handleClose={handleClose} isBelowSmScreen={isBelowSmScreen} />
      )}
    </Dialog>
  )
}

export default PermissionDialog
