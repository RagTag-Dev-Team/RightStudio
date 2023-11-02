// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import Link from '@components/Link'
import type { Direction } from '@core/types'

// Component Imports
import TwoFactorAuth from '@components/dialogs/two-factor-auth'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Styles Imports
import commonStyles from '@/styles/common.module.css'

const TwoFactorAuthenticationCard = ({ direction }: { direction: Direction }) => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Enable two-factor authentication'
  }

  return (
    <>
      <Card>
        <CardHeader title='Two-steps verification' />
        <CardContent className='flex flex-col items-start gap-5'>
          <div className='flex flex-col gap-4'>
            <Typography>Two factor authentication is not enabled yet.</Typography>
            <Typography>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in.
              <Link className={commonStyles.primaryColor}>Learn more.</Link>
            </Typography>
          </div>
          <OpenDialogOnElementClick
            element={Button}
            elementProps={buttonProps}
            dialog={TwoFactorAuth}
            dialogProps={{ direction: direction }}
          />
        </CardContent>
      </Card>
    </>
  )
}

export default TwoFactorAuthenticationCard
