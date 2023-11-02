// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

const AddActions = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Button fullWidth variant='contained' className='capitalize' startIcon={<i className='ri-send-plane-line' />}>
            Send Invoice
          </Button>
          <Button
            fullWidth
            component={Link}
            color='secondary'
            variant='outlined'
            className='capitalize'
            href={`/apps/invoice/preview/4987`}
          >
            Preview
          </Button>
          <Button fullWidth color='secondary' variant='outlined' className='capitalize'>
            Save
          </Button>
        </CardContent>
      </Card>
    </>
  )
}

export default AddActions
