// React Imports
import React from 'react'

// MUI Imports
import MuiTabList from '@mui/lab/TabList'
import { styled } from '@mui/material/styles'
import type { TabListProps } from '@mui/lab/TabList'

export type CustomTabListProps = TabListProps & {
  pill?: 'true' | 'false'
}

const TabList = styled(MuiTabList)<CustomTabListProps>(({ pill }) => ({
  ...(pill === 'true' && {
    minHeight: 38,
    '& .MuiTabs-indicator': {
      display: 'none'
    },
    '& .Mui-selected': {
      backgroundColor: 'var(--mui-palette-primary-main) !important',
      color: 'var(--mui-palette-primary-contrastText) !important'
    },
    '& .MuiTab-root': {
      minHeight: 38,
      borderRadius: 'var(--mui-shape-borderRadius)'
    }
  })
}))

const CustomTabList = (props: CustomTabListProps) => {
  // Props
  const { ...rest } = props

  return <TabList {...rest} />
}

export default CustomTabList
