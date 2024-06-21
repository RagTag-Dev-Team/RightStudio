'use client'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styled Component Imports
import AuthIllustrationWrapper from './AuthIllustrationWrapper'

const TwoStepsV1 = () => {
  // Hooks
  const { lang: locale } = useParams()

  return (
    <AuthIllustrationWrapper>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='sm:!p-12'>
          <Link href={getLocalizedUrl('/', locale as Locale)} className='flex justify-center mbe-6'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-1 mbe-6'>
            <Typography variant='h4'>Two Step Verification 💬</Typography>
            <Typography>
              We sent a verification code to your mobile. Enter the code from the mobile in the field below.
            </Typography>
            <Typography className='font-medium' color='text.primary'>
              ******1234
            </Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <Typography>Type your 6 digit security code</Typography>
              <div className='flex items-center justify-between gap-4'>
                <CustomTextField size='medium' autoFocus className='[&_input]:text-center' />
                <CustomTextField size='medium' className='[&_input]:text-center' />
                <CustomTextField size='medium' className='[&_input]:text-center' />
                <CustomTextField size='medium' className='[&_input]:text-center' />
                <CustomTextField size='medium' className='[&_input]:text-center' />
                <CustomTextField size='medium' className='[&_input]:text-center' />
              </div>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Skip For Now
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Didn&#39;t get the code?</Typography>
              <Typography color='primary' component={Link} href='/' onClick={e => e.preventDefault()}>
                Resend
              </Typography>
            </div>
          </form>
        </CardContent>
      </Card>
    </AuthIllustrationWrapper>
  )
}

export default TwoStepsV1
