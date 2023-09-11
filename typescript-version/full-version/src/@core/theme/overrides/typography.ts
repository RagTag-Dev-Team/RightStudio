// Type Imports
import type { ThemeAndOwnerState } from '@core/types'

const typography = {
  MuiTypography: {
    styleOverrides: {
      gutterBottom: ({ theme }: ThemeAndOwnerState) => ({
        marginBottom: theme.spacing(2)
      })
    },
    variants: [
      {
        props: { variant: 'h1' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'h2' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'h3' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'h4' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'h5' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'h6' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'subtitle1' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'subtitle2' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.secondary })
      },
      {
        props: { variant: 'body1' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'body2' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.secondary })
      },
      {
        props: { variant: 'button' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.primary })
      },
      {
        props: { variant: 'caption' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.secondary })
      },
      {
        props: { variant: 'overline' },
        style: ({ theme }: ThemeAndOwnerState) => ({ color: theme.palette.text.secondary })
      }
    ]
  }
}

export default typography
