// MUI Imports
import Alert from '@mui/material/Alert'

const AlertsOutlined = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Alert variant='outlined' severity='error'>
        This is an error alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='warning'>
        This is a warning alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='info'>
        This is an info alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='success'>
        This is a success alert — check it out!
      </Alert>
    </div>
  )
}

export default AlertsOutlined
