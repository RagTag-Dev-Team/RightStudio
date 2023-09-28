// React Imports
import React from 'react'

// MUI Imports
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'

const AlertsActions = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Alert
        onClose={e => {
          e.preventDefault()
        }}
      >
        This is a success alert — check it out!
      </Alert>
      <Alert
        action={
          <Button color='inherit' size='small'>
            Undo
          </Button>
        }
        variant='outlined'
      >
        This is a success alert — check it out!
      </Alert>
      <Alert
        action={
          <Button color='inherit' size='small'>
            Undo
          </Button>
        }
        variant='filled'
      >
        This is a success alert — check it out!
      </Alert>
    </div>
  )
}

export default AlertsActions
