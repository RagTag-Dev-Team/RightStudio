// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

const ProgressCircularControlledUncontrolled = () => {
  // States
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10))
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Typography className='font-medium mbe-4'>Uncontrolled Progress</Typography>
        <div className='flex gap-4'>
          <CircularProgress variant='determinate' value={25} />
          <CircularProgress variant='determinate' value={50} />
          <CircularProgress variant='determinate' value={75} />
          <CircularProgress variant='determinate' value={100} />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography className='font-medium mbe-4'>Controlled Progress</Typography>
        <CircularProgress variant='determinate' value={progress} />
      </Grid>
    </Grid>
  )
}

export default ProgressCircularControlledUncontrolled
