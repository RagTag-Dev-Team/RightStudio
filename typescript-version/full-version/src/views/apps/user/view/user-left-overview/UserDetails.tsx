'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import EditUserInfo from '@components/dialogs/edit-user-info'
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'

// Style Imports
import styles from './styles.module.css'

const userData = {
  firstName: 'Seth',
  lastName: 'Hallam',
  userName: '@shallamb',
  billingEmail: 'shallamb@gmail.com',
  status: 'active',
  role: 'Subscriber',
  taxId: 'Tax-8894',
  contact: '+1 (234) 464-0600',
  language: ['English'],
  country: 'France',
  useAsBillingAddress: true
}

const UserDetails = () => {
  // States
  const [openEdit, setOpenEdit] = useState(false)
  const [openConfirmation, setOpenConfirmation] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col'>
          <div className='flex flex-col'>
            <div className='flex items-center justify-center flex-col'>
              <div className='flex flex-col items-center gap-4'>
                <Avatar alt='user-profile' src='' variant='rounded' />
                <Typography>{`${userData.firstName} ${userData.lastName}`}</Typography>
              </div>
              <Chip label='Subscriber' color='error' size='small' />
            </div>
            <div className='flex'>
              <div className='flex items-center'>
                <Avatar variant='rounded'>
                  <i className={classnames('ri-check-line', styles.iconSize)} />
                </Avatar>
                <div>
                  <Typography>1.23k</Typography>
                  <Typography>Task Done</Typography>
                </div>
              </div>
              <div className='flex items-center'>
                <Avatar variant='rounded'>
                  <i className={classnames('ri-star-line', styles.iconSize)} />
                </Avatar>
                <div>
                  <Typography>568</Typography>
                  <Typography>Project Done</Typography>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Typography>Details</Typography>
            <Divider />
            <div className='flex flex-col'>
              <div className='flex items-center flex-wrap'>
                <Typography>Username:</Typography>
                <Typography>{userData.userName}</Typography>
              </div>
              <div className='flex items-center flex-wrap'>
                <Typography>Billing Email:</Typography>
                <Typography>{userData.billingEmail}</Typography>
              </div>
              <div className='flex items-center flex-wrap'>
                <Typography>Status</Typography>
                <Typography>{userData.status}</Typography>
              </div>
              <div className='flex items-center flex-wrap'>
                <Typography>Role:</Typography>
                <Typography>{userData.role}</Typography>
              </div>
              <div className='flex items-center flex-wrap'>
                <Typography>Tax ID:</Typography>
                <Typography>{userData.taxId}</Typography>
              </div>
              <div className='flex items-center flex-wrap'>
                <Typography>Contact:</Typography>
                <Typography>{userData.contact}</Typography>
              </div>
              <div className='flex items-center flex-wrap'>
                <Typography>Language:</Typography>
                <Typography>{userData.language}</Typography>
              </div>
              <div className='flex items-center flex-wrap'>
                <Typography>Country:</Typography>
                <Typography>{userData.country}</Typography>
              </div>
            </div>
          </div>
          <div className='flex gap-4 justify-center'>
            <Button variant='contained' onClick={() => setOpenEdit(true)}>
              Edit
            </Button>
            <Button variant='outlined' color='error' onClick={() => setOpenConfirmation(true)}>
              Suspend
            </Button>
          </div>
        </CardContent>
      </Card>
      <EditUserInfo open={openEdit} setOpen={setOpenEdit} data={userData} />
      <ConfirmationDialog open={openConfirmation} setOpen={setOpenConfirmation} type='suspend-account' />
    </>
  )
}

export default UserDetails
