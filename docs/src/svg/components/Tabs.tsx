// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Tabs = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="132" y="86" width="56" height="28" rx="6" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="141" y="97" width="38" height="6" rx="3" fill="white" fillOpacity="0.6"/>
      <rect x="12" y="86" width="56" height="28" rx="6" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="72" y="86" width="56" height="28" rx="6" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.5"/>
      <path d="M106.619 116.903L100 116.167V110.667C100 110.18 99.807 109.714 99.4632 109.37C99.1194 109.026 98.6531 108.833 98.1668 108.833C97.6806 108.833 97.2143 109.026 96.8705 109.37C96.5267 109.714 96.3335 110.18 96.3335 110.667V121.667L93.5551 120.556C93.3231 120.463 93.0746 120.419 92.8249 120.425C92.5751 120.432 92.3294 120.49 92.1028 120.595C91.8762 120.7 91.6734 120.85 91.507 121.037C91.3406 121.223 91.214 121.442 91.1351 121.679L91.0315 121.99C90.9731 122.165 90.9689 122.354 91.0194 122.531C91.07 122.708 91.1729 122.866 91.3148 122.984L96.0787 126.955C96.2428 127.091 96.4508 127.167 96.6653 127.167H106.417C106.903 127.167 107.369 126.974 107.713 126.63C108.057 126.286 108.25 125.82 108.25 125.333V118.724C108.25 118.273 108.084 117.838 107.783 117.502C107.482 117.166 107.068 116.953 106.619 116.903Z" fill="white"/>
      <path d="M95.8335 110.667V120.928L108.25 118.724C108.25 118.273 108.084 117.838 107.783 117.502C107.482 117.166 107.068 116.953 106.619 116.903L106.675 116.406L106.675 116.406L100.5 115.719V110.667C100.5 110.048 100.254 109.454 99.8168 109.017C99.3792 108.579 98.7857 108.333 98.1668 108.333C97.548 108.333 96.9545 108.579 96.5169 109.017C96.0793 109.454 95.8335 110.048 95.8335 110.667Z" stroke={`rgb(${theme.palette.text.primaryChannel})`} stroke-opacity="0.4"/>
      <rect x="81" y="97" width="38" height="6" rx="3" fill="white" fillOpacity="0.6"/>
      <rect x="21" y="97" width="38" height="6" rx="3" fill="white" fillOpacity="0.6"/>
    </svg>
  )
}

export default Tabs
