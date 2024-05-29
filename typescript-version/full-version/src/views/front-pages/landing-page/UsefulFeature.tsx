// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// Svg Imports
import Lines from '@assets/svg/front-pages/landing-page/Lines'
import LaptopCharging from '@assets/svg/front-pages/landing-page/LaptopCharging'
import TransitionUp from '@assets/svg/front-pages/landing-page/TransitionUp'
import Edit from '@assets/svg/front-pages/landing-page/Edit'
import Cube from '@assets/svg/front-pages/landing-page/Cube'
import LifeBuoy from '@assets/svg/front-pages/landing-page/Lifebuoy'
import Document from '@assets/svg/front-pages/landing-page/Document'

// Styles Imports
import styles from './styles.module.css'

// Data
const feature = [
  {
    icon: <LaptopCharging />,
    title: 'Quality Code',
    description: 'Code structure that all developers will easily understand and fall in love with.'
  },
  {
    icon: <TransitionUp />,
    title: 'Continuous Updates',
    description: 'Free updates for the next 12 months, including new demos and features.'
  },
  {
    icon: <Edit />,
    title: 'Stater-Kit',
    description: 'Start your project quickly without having to remove unnecessary features.'
  },
  {
    icon: <Cube />,
    title: 'API Ready',
    description: 'Just change the endpoint and see your own data loaded within seconds.'
  },
  {
    icon: <LifeBuoy />,
    title: 'Excellent Support',
    description: 'An easy-to-follow doc with lots of references and code examples.'
  },
  {
    icon: <Document />,
    title: 'Well Documented',
    description: 'An easy-to-follow doc with lots of references and code examples.'
  }
]

const UsefulFeature = () => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false

          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      id='features'
      ref={ref}
      className='flex flex-col gap-12 pli-6 pbe-[100px] pbs-[26px] md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] mli-auto'
    >
      <div className={classnames('flex flex-col items-center justify-center')}>
        <div className='flex items-center justify-center mbe-4 gap-3'>
          <Lines />
          <Typography className='font-medium'>Useful Feature</Typography>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-2 mbe-3 sm:mbe-1'>
          <Typography variant='h5' className='font-bold'>
            Everything you need
          </Typography>
          <Typography className='text-[18px]'>to start your next project</Typography>
        </div>
        <Typography color='text.secondary' className='font-medium text-center'>
          Not just a set of tools, the package includes ready-to-deploy conceptual application.
        </Typography>
      </div>
      <div>
        <Grid container spacing={6}>
          {feature.map((item, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <div className={classnames('mbe-2', styles.featureIcon)}>
                  <div className='flex items-center border-2 rounded-full p-5 is-[82px] bs-[82px]'>{item.icon}</div>
                </div>
                <Typography variant='h5'>{item.title}</Typography>
                <Typography className='max-is-[364px] text-center'>{item.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default UsefulFeature
