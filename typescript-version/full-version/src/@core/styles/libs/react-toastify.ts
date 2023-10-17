'use client'

// MUI Imports
import { styled } from '@mui/material/styles'

// Hook Imports
import useSettings from '@/@core/hooks/useSettings'

import 'react-toastify/dist/ReactToastify.css'

const ToastifyWrapper = styled('div')(({ theme }) => {
  // Hooks
  const { settings } = useSettings()

  return {
    '& .Toastify__toast': {
      minBlockSize: 44,
      borderRadius: 'var(--mui-shape-borderRadius)',
      padding: theme.spacing(1.5, 2.5),
      backgroundColor: 'var(--mui-palette-background-paper)',
      boxShadow: settings.skin === 'bordered' ? 'none' : 'var(--mui-customShadows-md)',
      border: settings.skin === 'bordered' ? `1px solid ${theme.palette.divider}` : 'none',
      '&:not(.custom-toast)': {
        '& .Toastify__toast-body': {
          color: 'var(--mui-palette-text-primary)'
        },
        '&.Toastify__toast--success': {
          '& .Toastify__toast-icon svg': {
            fill: 'var(--mui-palette-success-main)'
          }
        },
        '&.Toastify__toast--error': {
          '& .Toastify__toast-icon svg': {
            fill: 'var(--mui-palette-error-main)'
          }
        },
        '&.Toastify__toast--warning': {
          '& .Toastify__toast-icon svg': {
            fill: 'var(--mui-palette-warning-main)'
          }
        },
        '&.Toastify__toast--info': {
          '& .Toastify__toast-icon svg': {
            fill: 'var(--mui-palette-info-main)'
          }
        }
      }
    },
    '& .Toastify__toast-body': {
      margin: 0,
      lineHeight: 1.25,
      fontSize: theme.typography.body1.fontSize
    },
    '& .Toastify__toast-icon': {
      marginRight: theme.spacing(3)
    },
    '& .Toastify__close-button': {
      color: 'var(--mui-palette-text-primary)'
    }
  }
})

export default ToastifyWrapper
