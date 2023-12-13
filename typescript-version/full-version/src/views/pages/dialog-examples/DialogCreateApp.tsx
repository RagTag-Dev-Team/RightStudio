// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import CreateApp from '@components/dialogs/create-app'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogCreateApp = ({ direction }: { direction: Direction }) => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='ri-box-3-line text-[28px]' />
          <Typography variant='h5'>Create App</Typography>
          <Typography>
            Provide application data with this form to create the app dialog popup example, easy to use in any page.
          </Typography>
          <OpenDialogOnElementClick
            element={Button}
            elementProps={buttonProps}
            dialog={CreateApp}
            dialogProps={{ direction }}
          />
        </CardContent>
      </Card>
    </>
  )
}

export default DialogCreateApp
