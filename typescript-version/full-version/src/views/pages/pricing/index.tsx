'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import Pricing from '@components/pricing'

const PricingPage = ({ data }: { data?: PricingPlanType[] }) => {
  return (
    <Card>
      <CardContent>
        <Pricing data={data} />
      </CardContent>
    </Card>
  )
}

export default PricingPage
