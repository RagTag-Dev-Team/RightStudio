// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import type { CircularProgressProps } from '@mui/material/CircularProgress'

const Progress = (props: CircularProgressProps) => {
  return (
    <div className='relative inline-flex'>
      <CircularProgress variant='determinate' {...props} size={50} />
      <div className='flex absolute top-0 left-0 right-0 bottom-0 items-center justify-center'
      >
        <Typography variant='caption' component='div' color='text.secondary'>
          {`${Math.round(props.value as number)}%`}
        </Typography>
      </div>
    </div>
  )
}

const ProgressCircularWithLabel = () => {
  // States
  const [progress, setProgress] = useState<number>(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10))
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <Progress value={progress} />
}

export default ProgressCircularWithLabel
