// React Imports
import React from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import type { CircularProgressProps } from '@mui/material/CircularProgress'

const CircularProgressDeterminate = styled(CircularProgress)<CircularProgressProps>(() => ({
  // color: theme.palette.customColors.trackBg
}))

const CircularProgressIndeterminate = styled(CircularProgress)<CircularProgressProps>(({ theme }) => ({
  left: 0,
  position: 'absolute',
  animationDuration: '550ms',
  color: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
}))

const ProgressCircularCustomization = () => {
  return (
    <div className='relative'>
      <CircularProgressDeterminate variant='determinate' size={50} thickness={5} value={100} />
      <CircularProgressIndeterminate variant='indeterminate' disableShrink size={50} thickness={5} />
    </div>
  )
}

export default ProgressCircularCustomization
