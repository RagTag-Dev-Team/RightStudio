// React Imports
import React, { useEffect, useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import type { LinearProgressProps } from '@mui/material/LinearProgress'

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Typography variant='body2' color='text.secondary'>{`${Math.round(props.value)}%`}</Typography>
    </Box>
  )
}

const ProgressLinearWithLabel = () => {
  // States
  const [progress, setProgress] = useState<number>(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 10 : prevProgress + 10))
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <LinearProgressWithLabel value={progress} />
}

export default ProgressLinearWithLabel