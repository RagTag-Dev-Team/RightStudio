import type { ReactNode } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// Svgs
import Laptop from '@assets/svg/front-pages/help-center/Laptop'
import Bulb from '@assets/svg/front-pages/help-center/Bulb'
import Discord from '@assets/svg/front-pages/help-center/Discord'

// Types
type keepLearningType = {
  slug: string
  title: string
  svg: ReactNode
  subtitle: string
}

// Data
const keepLearning: keepLearningType[] = [
  {
    slug: 'blogging',
    title: 'Blogging',
    svg: <Laptop />,
    subtitle: 'Expert tips & tools to improve your website or online store using blog.'
  },
  {
    slug: 'inspiration-center',
    title: 'Inspiration Center',
    svg: <Bulb />,
    subtitle: 'Inspiration from experts to help you start and grow your big ideas.'
  },
  {
    slug: 'community',
    title: 'Community',
    svg: <Discord />,
    subtitle: 'A group of people living in the same place or having a particular.'
  }
]

const KeepLearning = () => {
  return (
    <div className='flex flex-col gap-6 md:plb-[100px] plb-[50px] md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] mli-auto pli-6'>
      <Typography variant='h4' className='text-center'>
        Keep Learning
      </Typography>
      <Grid container spacing={6}>
        {keepLearning.map((article, index) => {
          return (
            <Grid item xs={12} lg={4} key={index}>
              <Card>
                <CardContent className='flex flex-col items-center justify-center gap-3 text-center'>
                  {article.svg}
                  <Typography variant='h5'>{article.title}</Typography>
                  <Typography>{article.subtitle}</Typography>
                  <Button variant='outlined'>Read More</Button>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default KeepLearning
