// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const GetStarted = () => {
  return (
    <div className='relative'>
      <img
        src='/images/front-pages/landing-page/get-started-bg.png'
        alt='background-image'
        className='absolute is-full flex -z-1 pointer-events-none bs-full block-end-0'
      />
      <div className='flex items-center flex-wrap justify-center lg:justify-between gap-y-4 gap-x-28 pli-6 md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] mli-auto'>
        <div className='flex flex-col items-start gap-y-4 gap-x-8 pbs-9 lg:plb-9 z-[1]'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h5' color='primary' className='font-bold'>
              Ready to Get Started?
            </Typography>
            <Typography color='text.secondary'>Start your project with a 14-day free trial</Typography>
          </div>
          <Button variant='contained' endIcon={<i className='ri-arrow-right-line' />}>
            Get Started
          </Button>
        </div>
        <div className='flex pbs-4 lg:pbs-[60px] md:pie-4 z-[1]'>
          <img
            src='/images/front-pages/landing-page/crm-dashboard.png'
            alt='dashboard-image'
            className='max-is-[600px] is-full'
          />
        </div>
      </div>
    </div>
  )
}

export default GetStarted
