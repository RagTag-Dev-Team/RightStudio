// React Imports
import React, { useEffect, useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

const ProgressLinearControlledUncontrolled = () => {
  // States
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10

        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <div className='mbe-4'>
        <Typography className='font-medium mbe-1.5'>Uncontrolled Progress</Typography>
        <LinearProgress variant='determinate' value={40} />
      </div>
      <>
        <Typography className='font-medium mbe-1.5'>Controlled Progress</Typography>
        <LinearProgress variant='determinate' value={progress} />
      </>
    </>
  )
}

export default ProgressLinearControlledUncontrolled
