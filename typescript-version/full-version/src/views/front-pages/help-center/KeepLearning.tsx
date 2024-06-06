import type { ReactNode } from 'react'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// Type Imports
import type { Locale } from '@/configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Svgs
import Laptop from '@assets/svg/front-pages/help-center/Laptop'
import Bulb from '@assets/svg/front-pages/help-center/Bulb'
import Discord from '@assets/svg/front-pages/help-center/Discord'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

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
  // Hooks
  const params = useParams()

  // Vars
  const { lang: locale } = params

  return (
    <section className='flex flex-col md:plb-[100px] plb-[50px]'>
      <div className={frontCommonStyles.layoutSpacing}>
        <Typography variant='h4' className='text-center mbe-6'>
          Keep Learning
        </Typography>
        <Grid container spacing={6}>
          {keepLearning.map((article, index) => {
            return (
              <Grid item xs={12} lg={4} key={index}>
                <Card className='shadow-none border'>
                  <CardContent className='flex flex-col items-center justify-center gap-3 text-center'>
                    {article.svg}
                    <Typography variant='h5'>{article.title}</Typography>
                    <Typography>{article.subtitle}</Typography>
                    <Button
                      href={getLocalizedUrl(
                        '/front-pages/help-center/article/how-to-add-product-in-cart',
                        locale as Locale
                      )}
                      variant='outlined'
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </section>
  )
}

export default KeepLearning
