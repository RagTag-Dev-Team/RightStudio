'use client'

// MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'

// Third-party Imports
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import type { ToastContainerProps, ToastPosition } from 'react-toastify'

// Type Imports
import type { Direction } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

type Props = ToastContainerProps & {
  boxProps?: BoxProps
  direction?: Direction
}

// Styled Components
const ToastifyWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  '& .Toastify__toast': {
    minBlockSize: 44,
    borderRadius: 'var(--mui-shape-borderRadius)',
    padding: theme.spacing(1.5, 2.5),
    backgroundColor: 'var(--mui-palette-background-paper)',
    boxShadow: 'var(--mui-customShadows-md)',
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
    },
    '[data-skin="bordered"] &': {
      boxShadow: 'none',
      border: `1px solid var(--mui-palette-divider)`
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
}))

const AppReactToastify = (props: Props) => {
  const { boxProps, direction = 'ltr', ...rest } = props

  const positionMap: Partial<Record<ToastPosition, ToastPosition>> = {
    'top-right': 'top-left',
    'top-left': 'top-right',
    'bottom-left': 'bottom-right',
    'bottom-right': 'bottom-left',
    'top-center': 'top-center',
    'bottom-center': 'bottom-center'
  }

  const position = direction === 'rtl' ? positionMap[themeConfig.toastPosition] : themeConfig.toastPosition

  return (
    <ToastifyWrapper {...boxProps}>
      <ToastContainer rtl={direction === 'rtl'} position={position} {...rest} />
    </ToastifyWrapper>
  )
}

export default AppReactToastify
