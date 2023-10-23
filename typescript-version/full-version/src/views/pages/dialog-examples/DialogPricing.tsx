// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import PricingDialog from '@components/dialogs/pricing'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogPricing = ({ data }: { data: PricingPlanType[] }) => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='ri-money-dollar-circle-line text-[32px]' />
          <Typography>Pricing</Typography>
          <Typography>Elegant pricing options dialog popup example, easy to use in any page.</Typography>
          <OpenDialogOnElementClick
            element={Button}
            elementProps={buttonProps}
            dialog={PricingDialog}
            dialogProps={{ data }}
          />
        </CardContent>
      </Card>
    </>
  )
}

export default DialogPricing
