// MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Style Imports
import styles from './styles.module.css'

type Props = {
  pricingPlan: 'monthly' | 'annually'
  data: PricingPlanType
}

const PlanDetails = ({ data, pricingPlan }: Props) => {
  return (
    <CardContent className={classnames('relative', styles.plan, { [styles.active]: data?.popularPlan })}>
      {data?.popularPlan ? <Chip color='primary' label='Popular' size='small' className='absolute' /> : null}
      <div className='flex justify-center'>
        <img
          src={data?.imgSrc}
          height={data?.imgHeight}
          width={data?.imgWidth}
          alt={`${data?.title.toLowerCase().replace(' ', '-')}-img`}
        />
      </div>
      <div className='text-center'>
        <Typography>{data?.title}</Typography>
        <Typography>{data?.subtitle}</Typography>
      </div>
      <div className='relative'>
        <div className='flex justify-center'>
          <Typography component='sup' className='self-start'>
            $
          </Typography>
          <Typography component='span' color='primary'>
            {pricingPlan === 'monthly' ? data?.monthlyPrice : data?.yearlyPlan.monthly}
          </Typography>
          <Typography component='sub' className='self-end'>
            /month
          </Typography>
        </div>
        {pricingPlan !== 'monthly' && data?.monthlyPrice !== 0 ? (
          <Typography variant='caption' className='absolute'>{`USD ${data?.yearlyPlan.annually}/year`}</Typography>
        ) : null}
      </div>
      <div>
        {data?.planBenefits.map((item: string, index: number) => (
          <div key={index} className='flex items-center'>
            <span className='inline-flex'>
              <i className='ri-checkbox-blank-circle-line text-xs' />
            </span>
            <Typography>{item}</Typography>
          </div>
        ))}
      </div>
      <Button
        fullWidth
        color={data?.currentPlan ? 'success' : 'primary'}
        variant={data?.popularPlan ? 'contained' : 'outlined'}
      >
        {data?.currentPlan ? 'Your Current Plan' : 'Upgrade'}
      </Button>
    </CardContent>
  )
}

export default PlanDetails
