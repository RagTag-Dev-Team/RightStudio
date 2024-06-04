// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// Svg Imports
import Lines from '@assets/svg/front-pages/landing-page/Lines'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Data
const team = [
  {
    name: 'Sophie Gilbert',
    position: 'Project Manager',
    image: '/images/front-pages/landing-page/sophie.png',
    color: 'var(--mui-palette-primary-mainOpacity)'
  },
  {
    name: 'Nannie Ford',
    position: 'Development Lead',
    image: '/images/front-pages/landing-page/nannie.png',
    color: 'var(--mui-palette-error-mainOpacity)'
  },
  {
    name: 'Chris Watkins',
    position: 'Marketing Manager',
    image: '/images/front-pages/landing-page/chris.png',
    color: 'var(--mui-palette-success-mainOpacity)'
  },
  {
    name: 'Paul Miles',
    position: 'UI Designer',
    image: '/images/front-pages/landing-page/paul.png',
    color: 'var(--mui-palette-info-mainOpacity)'
  }
]

const Card = styled(MuiCard)`
  &:hover {
    border-color: ${(props: { color: ThemeColor }) => props.color};
  }
`

const OurTeam = () => {
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

    ref.current && observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='team' className={classnames('plb-[100px]', frontCommonStyles.layoutSpacing)} ref={ref}>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center mbe-4 gap-3'>
          <Lines />
          <Typography className='font-medium capitalize'>Our Great Team</Typography>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-2 mbe-3 sm:mbe-1'>
          <Typography variant='h5' className='font-bold'>
            Supported
          </Typography>
          <Typography className='text-[18px]'> by Real People</Typography>
        </div>
        <Typography color='text.secondary' className='font-medium text-center'>
          Who is behind these great-looking interfaces?
        </Typography>
      </div>
      <Grid container rowSpacing={16} columnSpacing={6} className='mbe-8 pbs-[100px]'>
        {team.map((member, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card className='shadow-none border overflow-visible' color={member.color as ThemeColor}>
              <CardContent className='flex flex-col items-center justify-center p-0'>
                <div
                  className='flex justify-center is-full mli-auto text-center bs-[189px] relative overflow-visible'
                  style={{ backgroundColor: member.color }}
                >
                  <img src={member.image} alt={member.name} className='bs-[240px] absolute block-start-[-50px]' />
                </div>
                <div className='flex flex-col gap-3 p-5'>
                  <div className='text-center'>
                    <Typography variant='h5'>{member.name}</Typography>
                    <Typography color='text.secondary'>{member.position}</Typography>
                  </div>
                  <div className='flex gap-3 item-center justify-center'>
                    <i className='ri-facebook-circle-line text-[22px]' />
                    <i className='ri-twitter-line text-[22px]' />
                    <i className='ri-linkedin-box-line text-[22px]' />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default OurTeam
