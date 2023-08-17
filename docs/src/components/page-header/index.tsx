// React Imports
import React from 'react'
import type { ReactNode } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

type PageHeaderProps = {
  href?: string
  title: ReactNode | string
  subtitle?: ReactNode | string
  openInNewTab?: boolean
}

const LinkStyled = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const PageHeader = (props: PageHeaderProps) => {
  // Props
  const { title, href, openInNewTab = true, subtitle } = props

  return (
    <Grid item xs={12}>
      {typeof title === 'string' ? (
        <Typography variant='h4'>
          {href ? (
            <LinkStyled href={href} {...(openInNewTab && { target: '_blank' })}>
              {title}
            </LinkStyled>
          ) : (
            title
          )}
        </Typography>
      ) : (
        title
      )}
      {typeof subtitle === 'string' ? <Typography variant='body2'>{subtitle}</Typography> : subtitle}
    </Grid>
  )
}

export default PageHeader
