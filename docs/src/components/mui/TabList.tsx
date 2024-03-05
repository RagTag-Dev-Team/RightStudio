// MUI Imports
import MuiTabList from '@mui/lab/TabList'
import { styled } from '@mui/material/styles'
import type { TabListProps } from '@mui/lab/TabList'

// Type Imports
import type { ThemeColor } from '@core/types'

export type CustomTabListProps = TabListProps & {
  color?: ThemeColor
  pill?: 'true' | 'false'
}

const TabList = styled(MuiTabList)<CustomTabListProps>(({ color, pill }) => ({
  ...(pill === 'true' && {
    minHeight: 38,
    '& .MuiTabs-indicator': {
      display: 'none'
    },
    '& .Mui-selected': {
      backgroundColor: `var(--mui-palette-${color}-main) !important`,
      color: `var(--mui-palette-${color}-contrastText) !important`
    },
    '& .MuiTab-root': {
      minHeight: 38,
      borderRadius: 'var(--mui-shape-borderRadius)'
    }
  })
}))

const CustomTabList = (props: CustomTabListProps) => {
  // Props
  const { color = 'primary', ...rest } = props

  return <TabList color={color} {...rest} />
}

export default CustomTabList
