// MUI Imports
import type { Theme } from '@mui/material/styles'

const chip: Theme['components'] = {
  MuiChip: {
    variants: [
      {
        props: { variant: 'tonal', color: 'primary' },
        style: {
          backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
          color: 'var(--mui-palette-primary-main)',
          '&.Mui-focusVisible': {
            backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
          },
          '& .MuiChip-deleteIcon': {
            color: 'rgb(var(--mui-palette-primary-mainChannel) / 0.7)',
            '&:hover': {
              color: 'var(--mui-palette-primary-main)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'secondary' },
        style: {
          backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
          color: 'var(--mui-palette-secondary-main)',
          '&.Mui-focusVisible': {
            backgroundColor: 'var(--mui-palette-secondary-mainOpacity)'
          },
          '& .MuiChip-deleteIcon': {
            color: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.7)',
            '&:hover': {
              color: 'var(--mui-palette-secondary-main)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'error' },
        style: {
          backgroundColor: 'var(--mui-palette-error-lightOpacity)',
          color: 'var(--mui-palette-error-main)',
          '&.Mui-focusVisible': {
            backgroundColor: 'var(--mui-palette-error-mainOpacity)'
          },
          '& .MuiChip-deleteIcon': {
            color: 'rgb(var(--mui-palette-error-mainChannel) / 0.7)',
            '&:hover': {
              color: 'var(--mui-palette-error-main)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'warning' },
        style: {
          backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
          color: 'var(--mui-palette-warning-main)',
          '&.Mui-focusVisible': {
            backgroundColor: 'var(--mui-palette-warning-mainOpacity)'
          },
          '& .MuiChip-deleteIcon': {
            color: 'rgb(var(--mui-palette-warning-mainChannel) / 0.7)',
            '&:hover': {
              color: 'var(--mui-palette-warning-main)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'info' },
        style: {
          backgroundColor: 'var(--mui-palette-info-lightOpacity)',
          color: 'var(--mui-palette-info-main)',
          '&.Mui-focusVisible': {
            backgroundColor: 'var(--mui-palette-info-mainOpacity)'
          },
          '& .MuiChip-deleteIcon': {
            color: 'rgb(var(--mui-palette-info-mainChannel) / 0.7)',
            '&:hover': {
              color: 'var(--mui-palette-info-main)'
            }
          }
        }
      },
      {
        props: { variant: 'tonal', color: 'success' },
        style: {
          backgroundColor: 'var(--mui-palette-success-lightOpacity)',
          color: 'var(--mui-palette-success-main)',
          '&.Mui-focusVisible': {
            backgroundColor: 'var(--mui-palette-success-mainOpacity)'
          },
          '& .MuiChip-deleteIcon': {
            color: 'rgb(var(--mui-palette-success-mainChannel) / 0.7)',
            '&:hover': {
              color: 'var(--mui-palette-success-main)'
            }
          }
        }
      }
    ]
  }
}

export default chip
