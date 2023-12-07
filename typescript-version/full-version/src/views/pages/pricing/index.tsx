'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'
import type { Direction } from '@core/types'

// Component Imports
import Pricing from '@components/pricing'

const PricingPage = ({ data, direction }: { data: PricingPlanType[]; direction: Direction }) => {
  return (
    <Card>
      <CardContent>
        <Pricing data={data} direction={direction} />
      </CardContent>
    </Card>
  )
}

export default PricingPage
