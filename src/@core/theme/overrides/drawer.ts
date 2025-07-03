// MUI Imports
import type { Theme } from '@mui/material'

// Type Imports
import type { Skin } from '@core/types'

const drawer = (skin: Skin): Theme['components'] => ({
  MuiDrawer: {
    defaultProps: {
      ...(skin === 'bordered' && {
        PaperProps: {
          elevation: 0
        }
      })
    },
    styleOverrides: {
      paper: {
        ...(skin !== 'bordered' && {
          boxShadow: 'var(--mui-customShadows-lg)'
        }),
        '&[aria-hidden="true"]': {
          '& button:focus, & input:focus, & [tabindex]:focus': {
            outline: 'none'
          }
        }
      },
      root: {
        '& .MuiBackdrop-root': {
          '&[aria-hidden="true"]': {
            pointerEvents: 'none'
          }
        }
      }
    }
  }
})

export default drawer
