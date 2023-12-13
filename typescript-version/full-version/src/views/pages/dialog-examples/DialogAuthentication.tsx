// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import TwoFactorAuth from '@components/dialogs/two-factor-auth'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogAuthentication = ({ direction }: { direction: Direction }) => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='ri-lock-line text-[28px]' />
        <Typography variant='h5'>Two Factor Authentication</Typography>
        <Typography>Enhance your application security by enabling two factor authentication.</Typography>
        <OpenDialogOnElementClick
          element={Button}
          elementProps={buttonProps}
          dialog={TwoFactorAuth}
          dialogProps={{ direction }}
        />
      </CardContent>
    </Card>
  )
}

export default DialogAuthentication
