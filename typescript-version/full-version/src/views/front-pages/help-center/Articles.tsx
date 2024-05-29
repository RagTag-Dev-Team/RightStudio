// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// Svgs
import Gift from '@assets/svg/front-pages/help-center/Gift'
import Rocket from '@assets/svg/front-pages/help-center/Rocket'
import File from '@assets/svg/front-pages/help-center/File'

// Types
type popularArticlesType = {
  slug: string
  title: string
  svg: ReactNode
  subtitle: string
}

// Data
const popularArticles: popularArticlesType[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    svg: <Rocket />,
    subtitle: "Whether you're new or you're a power user, this article will"
  },
  {
    slug: 'first-steps',
    title: 'First Steps',
    svg: <Gift />,
    subtitle: 'Are you a new customer wondering how to get started?'
  },
  {
    slug: 'external-content',
    title: 'Add External Content',
    svg: <File />,
    subtitle: 'Article will show you how to expand the functionality of App'
  }
]

const Articles = () => {
  return (
    <div className='md:plb-[100px] plb-[50px] md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] mli-auto pli-6'>
      <Typography variant='h4' className='text-center'>
        Popular Articles
      </Typography>
      <Grid container spacing={6}>
        {popularArticles.map((article, index) => {
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

export default Articles
