// MUI Imports
import LinearProgress from '@mui/material/LinearProgress'

const ProgressLinearColors = () => {
  return (
    <div className='w-full flex gap-4 flex-col'>
      <LinearProgress color='secondary' />
      <LinearProgress color='success' />
      <LinearProgress color='error' />
      <LinearProgress color='warning' />
      <LinearProgress color='info' />
    </div>
  )
}

export default ProgressLinearColors
