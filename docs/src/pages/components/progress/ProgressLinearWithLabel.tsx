// React Imports
import React, { useEffect, useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import type { LinearProgressProps } from '@mui/material/LinearProgress'

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-full'>
        <LinearProgress variant='determinate' {...props} />
      </div>
      <Typography variant='body2' color='text.secondary'>{`${Math.round(props.value)}%`}</Typography>
    </div>
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