'use client'

// React Imports
import React from 'react'

// MUI Imports
import MuiBadge from '@mui/material/Badge'
import type { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

export type CustomBadgeProps = BadgeProps & {
  tonal?: 'true' | 'false'
  rounded?: 'true' | 'false'
}

const Badge = styled(MuiBadge)<CustomBadgeProps>(({ theme, tonal, rounded, color }) => {
  return {
    '& .MuiBadge-badge.MuiBadge-standard': {
      ...(tonal === 'true' && {
        color: `var(--mui-palette-${color}-main)`,
        backgroundColor: `var(--mui-palette-${color}-lightOpacity)`
      }),
      ...(rounded === 'true' && {
        borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
        paddingInline: theme.spacing(3)
      })
    }
  }
})

const CustomBadge = (props: CustomBadgeProps) => <Badge {...props} />

export default CustomBadge
