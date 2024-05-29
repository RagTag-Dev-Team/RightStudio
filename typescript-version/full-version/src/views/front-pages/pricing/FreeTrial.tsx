// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const FreeTrial = () => {
  return (
    <div className='md:pli-[60px] pli-6 bg-[var(--mui-palette-primary-mainOpacity)]'>
      <div className='flex justify-between flex-wrap md:relative md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] pli-6 mli-auto'>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <div className='flex flex-col gap-11 items-center md:items-start justify-center plb-10'>
              <div className='flex flex-col gap-2'>
                <Typography variant='h5' color='primary' className='font-medium'>
                  Still not convinced? Start with a 14-day FREE trial!
                </Typography>
                <Typography color='text.secondary'>
                  You will get full access to with all the features for 14 days.
                </Typography>
              </div>
              <Button variant='contained'>Start 14-Days Free Trial</Button>
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <div className='md:absolute md:inline-end-[90px] xl:inline-end-[2%] flex justify-center block-end-[-1px]'>
              <img src='/images/front-pages/landing-page/chris.png' alt='girl with laptop' className='bs-[270px]' />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default FreeTrial
