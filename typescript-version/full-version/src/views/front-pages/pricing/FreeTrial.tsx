// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Locale } from '@/configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const FreeTrial = () => {
  // Hooks
  const params = useParams()

  // Vars
  const { lang: locale } = params

  return (
    <section className='bg-[var(--mui-palette-primary-mainOpacity)]'>
      <div className={classnames('flex justify-between flex-wrap md:relative', frontCommonStyles.layoutSpacing)}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <div className='flex flex-col gap-11 md:mis-8 items-center md:items-start justify-center plb-10'>
              <div className='flex flex-col gap-2'>
                <Typography variant='h5' color='primary' className='font-medium'>
                  Still not convinced? Start with a 14-day FREE trial!
                </Typography>
                <Typography color='text.secondary'>
                  You will get full access to with all the features for 14 days.
                </Typography>
              </div>
              <Button href={getLocalizedUrl('/front-pages/payment', locale as Locale)} variant='contained'>
                Start 14-Days Free Trial
              </Button>
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <div className='md:absolute md:inline-end-[90px] xl:inline-end-[2%] flex justify-center block-end-[-1px]'>
              <img src='/images/front-pages/landing-page/chris.png' alt='girl with laptop' className='bs-[270px]' />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default FreeTrial
