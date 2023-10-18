// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Autocomplete from '@mui/material/Autocomplete'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from '@components/dialogs/styles.module.css'
import themeConfig from '@configs/themeConfig'

type ShareProjectProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

type OptionsType = {
  avatar: string
  name: string
}

type DataType = {
  avatar: string
  value: string
  name: string
  email: string
}

const data: DataType[] = [
  {
    avatar: '1.png',
    value: 'Can Edit',
    name: 'Lester Palmer',
    email: 'lester.palmer@gmail.com'
  },
  {
    avatar: '2.png',
    value: 'Owner',
    name: 'Mittie Blair',
    email: 'mittie.blair@gmail.com'
  },
  {
    avatar: '3.png',
    value: 'Can Comment',
    name: 'Marvin Wheeler',
    email: 'marvin.wheeler@gmail.com'
  },
  {
    avatar: '4.png',
    value: 'Can View',
    name: 'Nannie Ford',
    email: 'nannie.ford@gmail.com'
  },
  {
    avatar: '5.png',
    value: 'Can Edit',
    name: 'Julian Murphy',
    email: 'julian.murphy@gmail.com'
  },
  {
    avatar: '6.png',
    value: 'Can View',
    name: 'Sophie Gilbert',
    email: 'sophie.gilbert@gmail.com'
  },
  {
    avatar: '7.png',
    value: 'Can Comment',
    name: 'Chris Watkins',
    email: 'chris.watkins@gmail.com'
  },
  {
    avatar: '8.png',
    value: 'Can Edit',
    name: 'Adelaide Nichols',
    email: 'adelaide.nichols@gmail.com'
  }
]

const autocompleteOptions: OptionsType[] = [
  {
    avatar: '1.png',
    name: 'Chandler Bing'
  },
  {
    avatar: '2.png',
    name: 'Rachel Green'
  },
  {
    avatar: '3.png',
    name: 'Joey Tribbiani'
  },
  {
    avatar: '4.png',
    name: 'Pheobe Buffay'
  },
  {
    avatar: '5.png',
    name: 'Ross Geller'
  },
  {
    avatar: '8.png',
    name: 'Monica Geller'
  }
]

const ShareProject = ({ open, setOpen }: ShareProjectProps) => {
  // States
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={() => setOpen(false)}>
      <DialogTitle
        variant='h5'
        className={classnames('flex gap-2 flex-col text-center', styles.dialogTitle, {
          [styles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Share Project
        <Typography component='span' variant='body2' className='flex flex-col text-center'>
          Share project with the team members
        </Typography>
      </DialogTitle>
      <DialogContent
        className={classnames('flex flex-col gap-6', styles.dialogContentWithActions, {
          [styles.smDialogContentWithActions]: isBelowSmScreen
        })}
      >
        <IconButton onClick={() => setOpen(false)} className={styles.closeIcon}>
          <i className='ri-close-line' />
        </IconButton>
        <div className='flex flex-col gap-2'>
          <InputLabel htmlFor='add-member' className='inline-flex'>
            Add Members
          </InputLabel>
          <Autocomplete
            autoHighlight
            id='add-member'
            options={autocompleteOptions || []}
            ListboxComponent={List}
            getOptionLabel={option => option.name}
            renderInput={params => <TextField {...params} size='small' placeholder='Add project members...' />}
            renderOption={(props, option) => (
              <ListItem {...props} key={option.name}>
                <ListItemAvatar>
                  <Avatar src={`/images/avatars/${option.avatar}`} alt={option.name} />
                </ListItemAvatar>
                <ListItemText primary={option.name} />
              </ListItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <Typography variant='h6'>{`${data.length} Members`}</Typography>
          <div className='flex flex-col flex-wrap gap-4'>
            {data.map((member, index) => (
              <div key={index} className='flex items-center w-full gap-4'>
                <Avatar src={`/images/avatars/${member.avatar}`} alt={member.name} />
                <div className='flex justify-between items-center w-full overflow-hidden'>
                  <div className='flex flex-col items-start overflow-hidden'>
                    <Typography variant='body2' className={classnames('truncate w-full', styles.textPrimary)}>
                      {member.name}
                    </Typography>
                    <Typography variant='body2' className='truncate w-full'>
                      {member.email}
                    </Typography>
                  </div>
                  {isBelowSmScreen ? (
                    <IconButton size='small' onClick={handleClick}>
                      <i className='ri-arrow-down-s-line text-xl' />
                    </IconButton>
                  ) : (
                    <Button
                      color='secondary'
                      onClick={handleClick}
                      endIcon={<i className='ri-arrow-down-s-line text-xl' />}
                    >
                      {member.value}
                    </Button>
                  )}
                </div>
              </div>
            ))}
            <Menu
              keepMounted
              anchorEl={anchorEl}
              onClose={handleClose}
              open={Boolean(anchorEl)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem value='Owner' onClick={handleClose}>
                Owner
              </MenuItem>
              <MenuItem value='Can Edit' onClick={handleClose}>
                Can Edit
              </MenuItem>
              <MenuItem value='Can Comment' onClick={handleClose}>
                Can Comment
              </MenuItem>
              <MenuItem value='Can View' onClick={handleClose}>
                Can View
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex items-center flex-grow gap-2'>
            <i className='ri-group-line text-xl' />
            <Typography
              variant='body2'
              className={styles.textPrimary}
            >{`Public to ${themeConfig.templateName} - ThemeSelection`}</Typography>
          </div>
          <Button variant='outlined' className='flex'>
            <i className='ri-link text-xl' />
            Copy Project Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ShareProject
