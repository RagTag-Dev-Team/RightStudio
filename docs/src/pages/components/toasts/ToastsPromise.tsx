// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsPromise = () => {
  const handleClick = () => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('foo')
        } else {
          reject('fox')
        }
      }, 1000)
    })

    return toast.promise(myPromise, {
      pending: 'Loading',
      success: 'Got the data',
      error: 'Error when fetching'
    })
  }

  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='ri-timer-2-line mbe-2 text-[32px]' />
      <Typography className='mbe-4 font-medium'>Promise</Typography>
      <Typography className='mbe-3'>Update automatically when promise resolves / fails.</Typography>
      <Button className='mbe-8'variant='contained' onClick={handleClick}>
        Promise
      </Button>
    </div>
  )
}

export default ToastsPromise
