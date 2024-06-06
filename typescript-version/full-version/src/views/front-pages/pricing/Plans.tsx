// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Locale } from '@/configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styles Imports
import tableStyles from '@core/styles/table.module.css'
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Types
type FeatureType = {
  feature: string
  starter: boolean
  pro: boolean
  enterprise: boolean
  addOnAvailable: {
    starter: boolean
    pro: boolean
    enterprise: boolean
  }
}
type PlanType = {
  variant: 'outlined' | 'contained'
  label: string
  plan: 'starter' | 'pro' | 'enterprise'
}

// Data
const features: FeatureType[] = [
  {
    feature: '14-days free trial',
    starter: true,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false
    }
  },
  {
    feature: 'No user limit',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false
    }
  },
  {
    feature: 'Product Support',
    starter: false,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false
    }
  },
  {
    feature: 'Email Support',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: true,
      enterprise: false
    }
  },
  {
    feature: 'Integrations',
    starter: false,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false
    }
  },
  {
    feature: 'Removal of Front branding',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: true,
      enterprise: false
    }
  },
  {
    feature: 'Active maintenance & support',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false
    }
  },
  {
    feature: 'Data storage for 365 days',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false
    }
  }
]

const plans: PlanType[] = [
  { variant: 'outlined', label: 'Choose Plan', plan: 'starter' },
  { variant: 'contained', label: 'Choose Plan', plan: 'pro' },
  { variant: 'outlined', label: 'Choose Plan', plan: 'enterprise' }
]

function Plans() {
  // Hooks
  const params = useParams()

  // Vars
  const { lang: locale } = params

  return (
    <section className='md:plb-[100px] plb-[50px]'>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col text-center gap-2 mbe-6'>
          <Typography variant='h4'>Pick a plan that works best for you</Typography>
          <Typography>Stay cool, we have a 48-hour money back guarantee!</Typography>
        </div>
        <div className='overflow-x-auto border rounded'>
          <table className={tableStyles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th>Time</th>
                <th className=''>
                  <Typography>STARTER</Typography>
                  <Typography variant='body2'>Free</Typography>
                </th>
                <th className=''>
                  <Typography>Pro</Typography>
                  <Typography variant='body2'>$7.5/Month</Typography>
                </th>
                <th className=''>
                  <Typography>ENTERPRISE</Typography>
                  <Typography variant='body2'>$16/Month</Typography>
                </th>
              </tr>
            </thead>
            <tbody className={classnames('border-be', styles.tableBody)}>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td>{feature.feature}</td>
                  <td>
                    {feature.starter ? (
                      <i className='ri-checkbox-circle-line text-primary' />
                    ) : (
                      <i className='ri-close-circle-line' />
                    )}
                  </td>
                  <td>
                    {feature.pro ? (
                      <i className='ri-checkbox-circle-line text-primary' />
                    ) : feature.addOnAvailable.pro && !feature.pro ? (
                      <Chip variant='tonal' size='small' color='primary' label='Add-on-Available' />
                    ) : (
                      <i className='ri-close-circle-line' />
                    )}
                  </td>
                  <td>
                    {feature.enterprise ? (
                      <i className='ri-checkbox-circle-line text-primary' />
                    ) : (
                      <i className='ri-close-circle-line' />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                {plans.map((plan, index) => (
                  <td key={index} className='text-center'>
                    <Button href={getLocalizedUrl('/front-pages/payment', locale as Locale)} variant={plan.variant}>
                      {plan.label}
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Plans
