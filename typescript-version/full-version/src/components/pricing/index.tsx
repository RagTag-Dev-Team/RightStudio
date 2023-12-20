'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'
import type { Direction } from '@core/types'

// Component Imports
import PlanDetails from './PlanDetails'

const Pricing = ({ data, direction }: { data: PricingPlanType[]; direction: Direction }) => {
  // States
  const [pricingPlan, setPricingPlan] = useState<'monthly' | 'annually'>('annually')

  const handleChange = (e: ChangeEvent<{ checked: boolean }>) => {
    if (e.target.checked) {
      setPricingPlan('annually')
    } else {
      setPricingPlan('monthly')
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Typography>Pricing Plans</Typography>
        <div className='flex items-center text-center flex-col'>
          <Typography>All plans include 40+ advanced tools and features to boost your product.</Typography>
          <Typography>Choose the best plan to fit your needs.</Typography>
        </div>
        <div className='flex justify-center items-center relative'>
          <InputLabel htmlFor='pricing-switch' className='cursor-pointer'>
            Monthly
          </InputLabel>
          <Switch id='pricing-switch' onChange={handleChange} checked={pricingPlan === 'annually'} />
          <InputLabel htmlFor='pricing-switch' className='cursor-pointer'>
            Annually
          </InputLabel>

          <div
            className={classnames('flex absolute max-sm:hidden block-start-[-30px] translate-x-[35%]', {
              'right-full': direction === 'rtl',
              'left-1/2': direction !== 'rtl'
            })}
          >
            <i
              className={classnames(
                {
                  'ri-corner-right-down-line': direction === 'rtl',
                  'ri-corner-left-down-line': direction !== 'rtl'
                },
                'mbs-2 mie-1'
              )}
            />
            <Chip label='Save up to 10%' size='small' />
          </div>
        </div>
      </div>
      <Grid container>
        {data?.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PlanDetails data={plan} pricingPlan={pricingPlan} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Pricing
